import { useDispatch } from "react-redux";
import styles from "../../../../styles/Form.module.css";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import { noImgHouse as imgHouse } from "../../../selectors/img";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { setHouseFormPhoto } from "../../../reducers/houses/slice";
import ButtonDeletePhoto from "../../Button/ButtonDeletePhoto";

const PhotoForm = ({ obj }) => {
  const dispatch = useDispatch();

  const custom = [
    styles.one,
    styles.two,
    styles.three,
    styles.four
  ];

  // fonction pour récuperer les images
  const handleChange = (changeEvent) => {

    const reader = new FileReader();
      reader.onload = (onLoadEvent) => {
        dispatch(
          setHouseFormPhoto(
            { ...obj, photo: onLoadEvent.target.result, main_photo: false }));
      };
     reader.readAsDataURL(changeEvent.target.files[0]);
  };

  return (
    <>
      <div
        className={`${styles.photos_hover} ${styles.photos_little}  ${styles.img} ${custom[obj.target]}`}
      >
        <label htmlFor={`file-${obj.target}`}>
          <input
            className={styles.displayNone}
            accept="image/*"
            id={`file-${obj.target}`}
            multiple
            type="file"
            name={obj.target}
            onChange={handleChange}
          />
          <PhotoCamera className={obj.photo ? 
            `${styles.photos_button} ${styles.photos_button_opacity}`
        : `${styles.photos_button_opacity}`}/>
          {obj.photo && (
            <Image
              className={styles.photos_img}
              loader={imagesLoader}
              unoptimized
              src={obj.photo}
              alt="images house"
              width="250"
              height="200"
            />
          )}
          {!obj.photo && (
            <Image
              className={`${styles.photos_img} ${styles.photos_img_opacity}`}
              loader={imagesLoader}
              unoptimized
              src={imgHouse}
              alt="images house"
              width="250"
              height="200"
            />
          )}
        </label>
        {obj.photo && <ButtonDeletePhoto bool={false} obj={{...obj}} />}
      </div>

    </>
  );
}

export default PhotoForm;
