import React from "react";
import styles from "../../../styles/Form.module.css";
import BigPhoto from "./PhotoForm/BigPhoto";
import LittlePhoto from "./PhotoForm/LittlePhoto";

function PhotoForm() {

  return (
    <section className={styles.photos}>
      <h3 className={styles.displayNone}>Photos du logement</h3>
      <BigPhoto />
      <LittlePhoto />
    </section>
  );
}

export default PhotoForm;
