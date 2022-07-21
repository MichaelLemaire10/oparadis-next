/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";
import styles from "../../../styles/House.module.css";
import imgplant from "../../../public/plant-carnivore.jpg";

function SectionPlant() {
  return (
    <section className={`${styles.plant} ${styles.card}`}>
      {/* <h3>Une ou plusieurs plantes</h3> */}
      <div className={styles.card_container}>
        <div className={styles.card_location}>
          <div className={styles.card_location__img}>
            <Image
              src={imgplant}
              className={styles.card_img}
              loader={imagesLoader}
              unoptimized
              alt="image plante"
            />
          </div>
          <div className={styles.card_location__info}>
            <p>
              <span>Type: </span>Carnivore
            </p>
          </div>
        </div>
        <div className={styles.card_notes}>
          {/* champs texte 120 caracteres max */}
          <p>
            <span>Notes: </span>Manger deux moutons par semaine et un grand
            verre d'eau plate.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionPlant;
