import React from "react";
import styles from "../../../styles/Form.module.css";
import BigPhoto from "./PhotoForm/BigPhotoForm";
import LittlePhoto from "./PhotoForm/LittlePhotoForm";
import ButtonClose from "../Button/ButtonClose";
import ButtonValidation from "../Button/ButtonValidation";

const PhotoForm = () => {
  const target = 'photoForm';

  return (
    <section className={styles.photos}>
      <ButtonClose custom={styles.button_close} target={target} />
      <ButtonValidation custom={styles.button_validation} target={target} />
      <BigPhoto />
      <LittlePhoto />
    </section>
  );
}

export default PhotoForm;
