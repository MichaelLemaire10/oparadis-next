import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import styles from "../../../../styles/House.module.css";

const LittlePhoto = ({ obj }) => {

    const custom = [
        styles.one,
        styles.two,
        styles.three,
        styles.four
      ];

    return (
        <div className={`${styles.photos_little} ${styles.img} ${custom[obj.target]}`}>
            <Image
                className={styles.photos_img}
                loader={imagesLoader}
                unoptimized
                src={obj.photo}
                layout="fill"
                alt="images house"
            />
        </div>
    );
};

export default LittlePhoto;