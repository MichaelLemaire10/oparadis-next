import React, { useState } from "react";
import styles from "../../../../styles/Form.module.css";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import { noImgHouse as imgHouse } from "../../../selectors/img";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

function PhotoForm() {
  // State to display the picture
  const [img1, setimg1] = useState();
  const [img2, setimg2] = useState();
  const [img3, setimg3] = useState();
  const [img4, setimg4] = useState();

  function handleOnChange(changeEvent) {
    const targetId = changeEvent.target.id;
    console.log("targetId:", targetId);
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      switch (targetId) {
        case "file-1":
          setimg1(onLoadEvent.target.result);
          break;
        case "file-2":
          setimg2(onLoadEvent.target.result);
          break;
        case "file-3":
          setimg3(onLoadEvent.target.result);
          break;
        case "file-4":
          setimg4(onLoadEvent.target.result);
          break;
        default:
          break;
      }
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  return (
    <>
      <div
        className={`${styles.photos_hover} ${styles.photos_little}  ${styles.img} ${styles.one}`}
      >
        <label htmlFor="file-1">
          <input
            className={styles.displayNone}
            accept="image/*"
            id="file-1"
            multiple
            type="file"
            name="1"
            onChange={handleOnChange}
          />
          <PhotoCamera className={img1? 
            `${styles.photos_button} ${styles.photos_button_opacity}`
        : `${styles.photos_button_opacity}`}/>
          {img1 && (
            <Image
              className={styles.photos_img}
              loader={imagesLoader}
              unoptimized
              src={img1}
              alt="images house one"
              width="250"
              height="200"
            />
          )}
          {!img1 && (
            <Image
              className={`${styles.photos_img} ${styles.photos_img_opacity}`}
              loader={imagesLoader}
              unoptimized
              src={imgHouse}
              alt="images house one"
              width="250"
              height="200"
            />
          )}
        </label>
      </div>
      <div
        className={`${styles.photos_hover} ${styles.photos_little}  ${styles.img} ${styles.two}`}
      >
        <label htmlFor="file-2">
          <input
            className={styles.displayNone}
            accept="image/*"
            id="file-2"
            multiple
            type="file"
            name="2"
            onChange={handleOnChange}
          />
          <PhotoCamera 
            className={img2? 
                `${styles.photos_button} ${styles.photos_button_opacity}`
            : `${styles.photos_button_opacity}`} 
          />

          {img2 && (
            <Image
              className={styles.photos_img}
              loader={imagesLoader}
              unoptimized
              src={img2}
              alt="images house one"
              width="250"
              height="200"
            />
          )}
          {!img2 && (
            <Image
              className={`${styles.photos_img} ${styles.photos_img_opacity}`}
              loader={imagesLoader}
              unoptimized
              src={imgHouse}
              alt="images house one"
              width="250"
              height="200"
            />
          )}
        </label>
      </div>
      <div
        className={`${styles.photos_hover} ${styles.photos_little}  ${styles.img} ${styles.three}`}
      >
        <label htmlFor="file-3">
          <input
            className={styles.displayNone}
            accept="image/*"
            id="file-3"
            multiple
            type="file"
            name="3"
            onChange={handleOnChange}
          />
          <PhotoCamera className={img3? 
            `${styles.photos_button} ${styles.photos_button_opacity}`
        : `${styles.photos_button_opacity}`} />
          {img3 && (
            <Image
              className={styles.photos_img}
              loader={imagesLoader}
              unoptimized
              src={img3}
              alt="images house one"
              width="250"
              height="200"
            />
          )}
          {!img3 && (
            <Image
              className={`${styles.photos_img} ${styles.photos_img_opacity}`}
              loader={imagesLoader}
              unoptimized
              src={imgHouse}
              alt="images house one"
              width="250"
              height="200"
            />
          )}
        </label>
      </div>
      <div
        className={`${styles.photos_hover} ${styles.photos_little} ${styles.img} ${styles.four}`}
      >
        <label htmlFor="file-4">
          <input
            className={styles.displayNone}
            accept="image/*"
            id="file-4"
            multiple
            type="file"
            name="4"
            onChange={handleOnChange}
          />
          <PhotoCamera className={img4? 
            `${styles.photos_button} ${styles.photos_button_opacity}`
        : `${styles.photos_button_opacity}`} />
          {img4 && (
            <Image
              className={styles.photos_img}
              loader={imagesLoader}
              unoptimized
              src={img4}
              alt="images house one"
              width="250"
              height="200"
            />
          )}
          {!img4 && (
            <Image
              className={`${styles.photos_img} ${styles.photos_img_opacity}`}
              loader={imagesLoader}
              unoptimized
              src={imgHouse}
              alt="images house one"
              width="250"
              height="200"
            />
          )}
        </label>
      </div>
    </>
  );
}

export default PhotoForm;
