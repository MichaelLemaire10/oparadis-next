import React from "react";
import styles from "../../../styles/Form.module.css";
import { useSelector } from "react-redux";
import BigPhoto from "./PhotoForm/BigPhotoForm";
import LittlePhoto from "./PhotoForm/LittlePhotoForm";
import ButtonClose from "../Button/ButtonClose";
import ButtonValidation from "../Button/ButtonValidation";

const PhotoForm = () => {
  const { photosForm } = useSelector(state => state.houses);

  console.log('photosForm =>', photosForm);

  const target = 'photoForm';

  const mainPhoto = photosForm.find(p => p.main_photo === true);
  const littlePhotos = photosForm.filter(p => p.main_photo === false);

  return (
    <section className={styles.photos}>
      <ButtonClose custom={styles.button_close} target={target} />
      <ButtonValidation custom={styles.button_validation} target={target} />
      <BigPhoto mainPhoto={mainPhoto && mainPhoto.photo ? mainPhoto : undefined} />
      <LittlePhoto littlePhotos={littlePhotos} />
    </section>
  );
}

export default PhotoForm;
