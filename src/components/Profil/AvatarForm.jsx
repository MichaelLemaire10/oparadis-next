import styles from "../../../styles/Profil.module.css";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { noImgAvatar as avatar } from "../../selectors/img";
import { useDispatch } from "react-redux";
import { setProfilDesc } from "../../reducers/users/slice";


const AvatarForm = ({ data, form }) => {
  // console.log('form:', form.avatar.length);
  const dispatch = useDispatch();
  
  // State to display the picture
  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();
    reader.onload = (onLoadEvent) => {
      dispatch(setProfilDesc({ ...form, avatar: onLoadEvent.target.result }));
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  return (
    <div className={`${styles.form_photo} ${styles.photo_hover}`}>
      <label htmlFor="photo-avatar">
        <input
          className={styles.displayNone}
          id="photo-avatar"
          type="file"
          name="file"
          onChange={handleOnChange}
        />
        <PhotoCamera
          className={
            data.avatar ?
              `${styles.photo_button} ${styles.photo_button_opacity}`
              :
              `${styles.photo_button_opacity}`}
        />
        {form.avatar || data.avatar != avatar ?
          <Image
            className={styles.photo_img}
            loader={imagesLoader}
            src={form.avatar ? form.avatar : data.avatar}
            unoptimized
            alt="image"
            width="250"
            height="250"
          />
          :
          <Image
            className={`${styles.photo_img} ${styles.photo_img_opacity}`}
            loader={imagesLoader}
            src={avatar}
            unoptimized
            priority
            alt="image"
            width="250"
            height="250"
          />
      }
      </label>
    </div>
  );
};

export default AvatarForm;
