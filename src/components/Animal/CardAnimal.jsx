import Image from "next/image";
import imagesLoader from "../../../imagesLoader";
import styles from "../../../styles/House.module.css";
import imgchimere from "../../../public/chimere.jpg";
import noImg from "../../../public/animaux.jpg";

const CardAnimal = (obj) => {
    // console.log('obj:', obj.race);
    const { src, type , race, maladie, notes } = obj;
    return (
        <div className={styles.card_container}>
        <div className={styles.card_location}>
          <div className={styles.card_location__img}>
            <Image
              src={src ? src : noImg}
              className={styles.card_img}
              loader={imagesLoader}
              unoptimized
              alt="image animal"
            />
          </div>
          <div className={styles.card_location__info}>
            <p>
              <span>Type: </span>{type}
            </p>
            <p>
              <span>Race: </span>{race}
            </p>
            <p>
              <span>Maladie: </span>{maladie}
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

export default CardAnimal;