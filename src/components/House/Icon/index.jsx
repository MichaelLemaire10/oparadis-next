import styles from "../../../../styles/House.module.css";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";

const Icon = ({ obj }) => {
    return (
        <p className={styles.icon}>
            <Image
                src={obj.src}
                className={styles.icon_img}
                loader={imagesLoader}
                unoptimized
                width="64"
                height="64"
                alt={obj.name}
            />
        </p>
    );
};

export default Icon