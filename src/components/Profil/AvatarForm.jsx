import { useState } from "react";
import styles from "../../../styles/Profil.module.css";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { noImgAvatar as avatar } from "../../selectors/img";


const AvatarForm = () => {

  const [imageSrc, setImageSrc] = useState('');

  // State to display the picture
  function handleOnChange(changeEvent) {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  }

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
      className={imageSrc? 
          `${styles.photo_button} ${styles.photo_button_opacity}`
      : `${styles.photo_button_opacity}`} 
      />
      {imageSrc && (
        <Image
          className={styles.photo_img}
          loader={imagesLoader}
          src={imageSrc}
          unoptimized
          alt="image"
          width="250"
          height="250"
        />
      )}
      {!imageSrc && (
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
      )}
      </label>
  </div>
  );
};

export default AvatarForm;
