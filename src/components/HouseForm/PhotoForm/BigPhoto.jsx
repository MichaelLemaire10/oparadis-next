import React, { useState } from "react";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import imgHouse from "../../../../public/house.jpg";
import styles from "../../../../styles/Form.module.css";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

function PhotoForm() {
  //   State to display the picture
  const [imageSrc, setImageSrc] = useState('');
  function handleOnChange(changeEvent) {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  return (
    <div className={`${styles.photos_big} ${styles.photos_hover}`}>
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
        className={imageSrc? 
            `${styles.photos_button} ${styles.photos_button_opacity}`
        : `${styles.photos_button_opacity}`} 
        />
          {imageSrc && (
            <Image
              className={styles.photos_img}
              loader={imagesLoader}
              unoptimized
              src={imageSrc}
              alt="images house"
              layout="fill"
            />
          )}
          {!imageSrc && (
            <Image
              className={`${styles.photos_img} ${styles.photos_img_opacity} `}
              loader={imagesLoader}
              unoptimized
              src={imgHouse}
              alt="images house"
              layout="fill"
            />
          )}
        </label>
    </div>
  );
}

export default PhotoForm;
