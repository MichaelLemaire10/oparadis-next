import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../../../styles/Form.module.css";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import { noImgHouse } from "../../../selectors/img";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from '@mui/icons-material/Delete';
import { setHouseFormPhoto } from "../../../reducers/houses/slice";

function PhotoForm({ mainPhoto }) {

  // const { photosForm } = useSelector(state => state.houses);
  // const mainPhoto = photosForm.find(p => p.main_photo === true);

  console.log('mainPhoto =>', mainPhoto);

  const dispatch = useDispatch();

  const handleChange = (changeEvent) => {
    const reader = new FileReader();
      reader.onload = (onLoadEvent) => {
        dispatch(
          setHouseFormPhoto(
            { id: 1, photo: onLoadEvent.target.result, main_photo: true }));
      };
     reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleClick = () => dispatch(setHouseFormPhoto({ id: 1, photo: null , main_photo: true }));

  return (
    <div className={`${styles.photos_big} ${styles.photos_hover}`}>
      {mainPhoto && (
        <div className={styles.button_delete}>
          <DeleteIcon
            className={styles.button_delete}
            onClick={handleClick}
            fontSize="large"
            color="error"
          />
        </div>)}
      <label htmlFor="contained-button-file">
        <input
          className={styles.displayNone}
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          name="file"
          onChange={handleChange}
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
