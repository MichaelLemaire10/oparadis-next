import styles from "../../../styles/House.module.css"
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";

const SectionCalendar = () => {
  return (
    <section className={styles.calendar}>
        <Image
          className={styles.photos_img_travaux}
          loader={imagesLoader}
          unoptimized
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1660138933/jmw60eohvogbghs3wifn.jpg"
          layout="fill"
          alt="images house"
        />
    </section>
  )
};

export default SectionCalendar;