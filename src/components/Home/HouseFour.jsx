import styles from "../styles/Home.module.css";
import Image from "next/image";
import imageLoader from "../../../imagesLoader";

function HouseFour () {

    return (
        <article className={styles.card}>
        <div className={styles.card_img}>image</div>
        <div className={styles.card_text}>
          <h2 className={styles.card_text__name}>maison 3</h2>
          <p>Type du logement</p>
          <div className={styles.card_text__location}>
            <p>Ville</p>
            <p>Pays</p>
          </div>
          <p>Date de création</p>
        </div>
      </article>
    )
};

export default HouseFour;