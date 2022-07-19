import styles from "../../../styles/Home.module.css";
import ImgHouse from "../ImgHouse";

function HouseFour({ obj }) {
  const custom = {
    width: 250,
    height: 175,
    styles: styles.card_img__img,
  };
  
  const picture = obj.photo.filter(p => p.main_photo === true);
  const bool = obj.photo[0] ? true : false ;

  return (
    <article className={styles.card}>
      <div className={styles.card_img}>
      {bool && picture.map(p => <ImgHouse key={p.id} data={p} custom={custom} />)}
      {!bool && <ImgHouse data={{main_photo: false}} custom={custom} />}
      </div>
      <div className={styles.card_text}>
        <h2 className={styles.card_text__name}>{obj.title}</h2>
        <p>{obj.type.type}</p>
        <div className={styles.card_text__location}>
          <p>{obj.city}</p>
          <p>{obj.country.country}</p>
        </div>
        <p>{obj.created_at}</p>
      </div>
    </article>
  )
};

export default HouseFour;