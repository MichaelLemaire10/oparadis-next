import React, { useState } from "react";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import { noImgHouse } from "../../../selectors/img";
import styles from "../../../../styles/Form.module.css";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { setHouseFormPhoto } from "../../../reducers/houses/slice";
import { useDispatch } from "react-redux";

function PhotoForm({ mainPhoto }) {
  const dispatch = useDispatch();
  //   State to display the picture

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();
    reader.onload = (onLoadEvent) => {
      dispatch(
        setHouseFormPhoto(
          { ...mainPhoto, avatar: onLoadEvent.target.result, main_photo: true }));
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  return (
    <div className={`${styles.photos_big} ${styles.photos_hover}`}>
      {/* <button onClick={() => {setImageSrc()}}>delete</button> */}
        <label htmlFor="contained-button-file">
          <input
            className={styles.displayNone}
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            name="file"
            onChange={handleOnChange}
          />
        <PhotoCamera 
        className={mainPhoto ? 
            `${styles.photos_button} ${styles.photos_button_opacity}`
        : `${styles.photos_button_opacity}`}
        />
          {mainPhoto && (
            <Image
              className={styles.photos_img}
              loader={imagesLoader}
              unoptimized
              src={mainPhoto.photo}
              alt="images house"
              layout="fill"
            />
          )}
          {!mainPhoto && (
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
    </div>
  );
}

export default PhotoForm;
