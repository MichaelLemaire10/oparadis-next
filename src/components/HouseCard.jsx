import styles from "../../styles/ResultSearch.module.css";
import Image from "next/image";
import { noImgHouse } from "../selectors/img";

const houseCard = ({obj}) => {
  
    const { title, type, country, city, photo } = obj;
    const mainPhoto = photo.find(p => p.main_photo === true);

    return (
        <article className={styles.card}>
          <div className={styles.card_img}>
            <Image 
              layout="fill" 
              className={styles.card_img__img} 
              src={mainPhoto ? mainPhoto.photo : noImgHouse} 
              alt="image logement" 
            />
          </div>
          <div className={styles.card_text}>
            <h2 className={styles.card_text__name}>{title}</h2>
            <p>{type.type}</p>
            <div className={styles.card_text__location}>
              <p>{city},</p>
              <p>{country.country}</p>
            </div>
          </div>
        </article>
    );
};

export default houseCard;