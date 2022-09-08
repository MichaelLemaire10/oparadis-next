import styles from "../../../styles/House.module.css"
import ImgAvatar from "../Image/ImgAvatar";

const SectionUser = ({ user }) => {

  const custom = { width: "80px", height: "80px" };
    return (
        <section className={styles.user}>
          <p className={styles.user_info}>
            <ImgAvatar custom={custom} avatar={user.avatar} />
            <span className={styles.user_info__pseudo}>
              {user.pseudo}
            </span> 
          </p> 
          <p className={styles.user_desc}>
            {user.description}
          </p>
        </section>
    )
};

export default SectionUser;