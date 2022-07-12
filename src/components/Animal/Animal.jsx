import React from "react";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";
import styles from "../../../styles/Form.module.css";
import imgchimere from "../../../public/chimere.jpg";
import noImg from "../../../public/animaux.jpg";

function SectionAnimal() {
  return (
    <section className={`${styles.animal} ${styles.card}`}>
      {/* <h3>Un ou plusieurs animaux</h3> */}
      <div className={`${styles.card_container} ${styles.animal_color}`}>
        <div className={styles.card_location}>
          <div className={styles.card_location__img}>
            <Image
              src={imgchimere}
              className={styles.card_img}
              loader={imagesLoader}
              unoptimized
              alt="image plante"
            />
          </div>
          <div className={styles.card_location__info}>
            <p>
              <span>Type: </span>Légendaire
            </p>
            <p>
              <span>Race: </span>Chimére
            </p>
            <p>
              <span>Maladie: </span>schizophrène
            </p>
          </div>
        </div>
        <div className={styles.card_notes}>
          {/* champs texte 120 caracteres max */}
          <p>
            <span>Notes: </span>0123456789 0123456789 0123456789 0123456789
            0123456789 0123456789 0123456789 0123456789 0123456789 0123456789
            0123456789 0123456789
          </p>
        </div>
      </div>
      <div className={`${styles.card_container} ${styles.animal_color}`}>
        <div className={styles.card_location}>
          <div className={styles.card_location__img}>
            <Image
              src={noImg}
              className={styles.card_img}
              loader={imagesLoader}
              unoptimized
              alt="image plante"
            />
          </div>
          <div className={styles.card_location__info}>
            <p>
              <span>Type: </span>Chien
            </p>
            <p>
              <span>Race: </span>Bulldogs
            </p>
            <p>
              <span>Maladie: </span>RAS
            </p>
          </div>
        </div>
        <div className={styles.card_notes}>
          {/* champs texte 120 caracteres max */}
          <p>
            <span>Notes: </span>0123456789 0123456789 0123456789 0123456789
            0123456789 0123456789 0123456789 0123456789 0123456789 0123456789
            0123456789 0123456789
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionAnimal;
