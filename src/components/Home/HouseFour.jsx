import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import imageLoader from "../../../imagesLoader";

function HouseFour ( {obj} ) {

    return (
        <article className={styles.card}>
        <div className={styles.card_img}>
          <Image 
            loader={imageLoader}
            unoptimized
            className={styles.card_img__img}
            src={obj.img}
            alt="image house"
            width={250}
            height={175}
            />
        </div>
        <div className={styles.card_text}>
          <h2 className={styles.card_text__name}>{obj.title}</h2>
          <p>{obj.type}</p>
          <div className={styles.card_text__location}>
            <p>{obj.city}</p>
            <p>{obj.country}</p>
          </div>
          <p>{obj.date}</p>
        </div>
      </article>
    )
};

export default HouseFour;