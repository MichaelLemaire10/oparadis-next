import React, { useState } from "react";
import styles from "../../../../styles/Form.module.css";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import { noImgHouse as imgHouse } from "../../../selectors/img";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import ButtonDeletePhoto from "../../Button/ButtonDeletePhoto";

const PhotoForm = ({ obj }) => {

  // State to display the picture
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();

  // fonction pour récuperer les images
  const handleOnChange = (changeEvent) => {
    const targetId = changeEvent.target.id;
    console.log("targetId =>", targetId);
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      switch (targetId) {
        case "file-0":
          setImg1(onLoadEvent.target.result);
          break;
        case "file-1":
          setImg2(onLoadEvent.target.result);
          break;
        case "file-2":
          setImg3(onLoadEvent.target.result);
          break;
        case "file-3":
          setImg4(onLoadEvent.target.result);
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
        <label htmlFor="file-0">
          <input
            className={styles.displayNone}
            accept="image/*"
            id="file-0"
            multiple
            type="file"
            name="0"
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
              alt="images house"
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
              alt="images house"
              width="250"
              height="200"
            />
          )}
        </label>
        {img1 && <ButtonDeletePhoto bool={false} obj={{...obj, target: 0}} />}
      </div>
      <div
        className={`${styles.photos_hover} ${styles.photos_little}  ${styles.img} ${styles.two}`}
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
              alt="images house"
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
              alt="images house"
              width="250"
              height="200"
            />
          )}
        </label>
        {img2 && <ButtonDeletePhoto bool={false} obj={{...obj, target: 1}} />}
      </div>
      <div
        className={`${styles.photos_hover} ${styles.photos_little}  ${styles.img} ${styles.three}`}
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
          <PhotoCamera className={img3? 
            `${styles.photos_button} ${styles.photos_button_opacity}`
        : `${styles.photos_button_opacity}`} />
          {img3 && (
            <Image
              className={styles.photos_img}
              loader={imagesLoader}
              unoptimized
              src={img3}
              alt="images house"
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
              alt="images house"
              width="250"
              height="200"
            />
          )}
        </label>
        {img3 && <ButtonDeletePhoto bool={false} obj={{...obj, target: 2}} />}
      </div>
      <div
        className={`${styles.photos_hover} ${styles.photos_little} ${styles.img} ${styles.four}`}
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
          <PhotoCamera className={img4? 
            `${styles.photos_button} ${styles.photos_button_opacity}`
        : `${styles.photos_button_opacity}`} />
          {img4 && (
            <Image
              className={styles.photos_img}
              loader={imagesLoader}
              unoptimized
              src={img4}
              alt="images house"
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
              alt="images house"
              width="250"
              height="200"
            />
          )}
        </label>
        {img4 && <ButtonDeletePhoto bool={false} obj={{...obj, target: 3}} />}
      </div>
    </>
  );
}

export default PhotoForm;
