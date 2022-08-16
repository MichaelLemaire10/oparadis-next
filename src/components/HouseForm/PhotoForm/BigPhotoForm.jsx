import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../../../styles/Form.module.css";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import { noImgHouse } from "../../../selectors/img";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { setHouseFormPhoto } from "../../../reducers/houses/slice";
import ButtonDeletePhoto from "../../Button/ButtonDeletePhoto";

function PhotoForm({ mainPhoto }) {
  const dispatch = useDispatch();

  const handleChange = (changeEvent) => {
    const reader = new FileReader();
      reader.onload = (onLoadEvent) => {
        dispatch(
          setHouseFormPhoto(
            { ...mainPhoto, photo: onLoadEvent.target.result, main_photo: true }));
      };
     reader.readAsDataURL(changeEvent.target.files[0]);
  };


  return (
    <div className={`${styles.photos_big} ${styles.photos_hover}`}>
      
      <label htmlFor={`file-${mainPhoto.target}`}>
        <input
          className={styles.displayNone}
          accept="image/*"
          id={`file-${mainPhoto.target}`}
          multiple
          type="file"
          name={mainPhoto.target}
          onChange={handleChange}
        />
        <PhotoCamera
          className={mainPhoto.photo ?
            `${styles.photos_button} ${styles.photos_button_opacity}`
            : `${styles.photos_button_opacity}`}
        />
        {mainPhoto.photo && (
          <Image
            className={styles.photos_img}
            loader={imagesLoader}
            unoptimized
            src={mainPhoto.photo}
            alt="images house"
            layout="fill"
          />
        )}
        {!mainPhoto.photo && (
          <Image
            className={`${styles.photos_img} ${styles.photos_img_opacity} `}
            loader={imagesLoader}
            unoptimized
            src={noImgHouse}
            alt="images house"
            layout="fill"
          />
        )}
      </label>
      {mainPhoto.photo && <ButtonDeletePhoto bool={true} obj={{...mainPhoto}} />}
    </div>
  );
}

export default PhotoForm;
