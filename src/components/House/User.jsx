import styles from "../../../styles/House.module.css"
import ImgAvatar from "../Image/ImgAvatar";

const SectionUser = () => {
  const custom = { width: "60px", height: "60px" };

    return (
        <section className={styles.user}>
          <p className={styles.user_info}>
            <ImgAvatar custom={custom} />
            <span className={styles.user_info__pseudo}>Pseudo</span> 
          </p> 
          <p className={styles.user_desc}>
           <strong>Descritption: </strong>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.  Dolore eius labore reprehenderit, dignissimos impedit expedita est fugit esse sit quia ex.  Magni quam magnam soluta aliquid
          </p>
        </section>
    )
};

export default SectionUser;