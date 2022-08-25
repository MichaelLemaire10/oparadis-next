import React from "react";
import styles from "../../../styles/House.module.css";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";
import { noImgPlant as noImg } from "../../../src/selectors/img";

const CardPlant = ({obj}) => {
  const { photo, type, notes } = obj;

    return(
        <div className={styles.card_container}>
        <div className={styles.card_location}>
          <div className={styles.card_location__img}>
            <Image
              unoptimized
              layout="fill"
              src={photo ? photo : noImg}
              className={styles.card_img}
              loader={imagesLoader}
              alt="image plante"
            />
          </div>
          <div className={styles.card_location__info}>
            <p>
              <span>Type: </span>{type}
            </p>
          </div>
        </div>
        <div className={styles.card_notes}>
          {/* champs texte 120 caracteres max */}
          <p>
            <span>Notes: </span>
            {notes}
          </p>
        </div>
      </div>
    )
};

export default CardPlant;