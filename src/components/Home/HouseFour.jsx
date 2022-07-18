import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import imageLoader from "../../../imagesLoader";
import img from '../../../public/house.jpg'

function HouseFour ( {obj} ) {
console.log('obj:', obj);
const photos = obj.photo;
console.log('photos:', photos);

    return (
        <article className={styles.card}>
        <div className={styles.card_img}>
          { photos.map((p) => {
            if(p.main_photo === true) {
            <Image 
              loader={imageLoader}
              unoptimized
              className={styles.card_img__img}
              src={p.photo}
              alt="image house"
              width={250}
              height={175}
              />
            } else {
              <Image 
              loader={imageLoader}
              unoptimized
              className={styles.card_img__img}
              src={img}
              alt="image house"
              width={250}
              height={175}
              />
              }
            }) 
        }  
        </div>
        <div className={styles.card_text}>
          <h2 className={styles.card_text__name}>{obj.title}</h2>
          <p>{obj.type.type}</p>
          <div className={styles.card_text__location}>
            <p>{obj.city}</p>
            <p>{obj.country.country}</p>
          </div>
          <p>{obj.date}</p>
        </div>
      </article>
    )
};

export default HouseFour;