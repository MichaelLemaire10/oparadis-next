import React from "react";
import styles from "../../../styles/House.module.css";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";

const CardPlant = ({obj}) => {
  const noImg = "https://res.cloudinary.com/dhwbw94lc/image/upload/v1658830088/image%20default/ybwxv9ev5icpplqgdsuk.svg";
  const { src, type, notes } = obj;

    return(
        <div className={styles.card_container}>
        <div className={styles.card_location}>
          <div className={styles.card_location__img}>
            <Image
              unoptimized
              layout="fill"
              src={src ? src : noImg}
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