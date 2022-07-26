import styles from "../../../styles/House.module.css";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";

const CardAnimal = ({obj}) => {
  const noImg = "https://res.cloudinary.com/dhwbw94lc/image/upload/v1658828607/image%20default/ncxztkg65sblzzn8qozu.jpg";
  const { src, type , race, maladie, notes } = obj;
  
    return (
        <div className={styles.card_container}>
        <div className={styles.card_location}>
          <div className={styles.card_location__img}>
            <Image
              unoptimized
              layout='fill'
              src={src ? src : noImg}
              className={styles.card_img}
              loader={imagesLoader}
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