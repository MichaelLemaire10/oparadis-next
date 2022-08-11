import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import styles from "../../../../styles/House.module.css";

const LittlePhoto = ({ photo, style}) => {

    return (
        <div className={`${styles.photos_little} ${styles.img} ${style}`}>
            <Image
                className={styles.photos_img}
                loader={imagesLoader}
                unoptimized
                src={photo.photo}
                layout="fill"
                alt="images house"
            />
        </div>
    );
};

export default LittlePhoto;