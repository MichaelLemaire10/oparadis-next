import React from "react";
import styles from "../../../styles/Form.module.css";
import BigPhoto from "./PhotoForm/BigPhoto";
import LittlePhoto from "./PhotoForm/LittlePhoto";
import ButtonClose from "../button/buttonClose";
import ButtonValidation from "../button/buttonValidation";

const PhotoForm = () => {
  const styleBtnClose = {styles: styles.button_close};
  const styleBtnVld = {styles: styles.button_validation};
  const target = 'photoForm';

  return (
    <section className={styles.photos}>
      <ButtonClose custom={styleBtnClose} target={target} />
      <ButtonValidation custom={styleBtnVld} target={target} />
      <BigPhoto />
      <LittlePhoto />
    </section>
  );
}

export default PhotoForm;
