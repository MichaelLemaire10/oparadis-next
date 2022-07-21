import Image from "next/image";
import imageLoader from "../../../imagesLoader";
import styles from "../../../styles/Header.module.css";

const ImgAvatar = ({ custom }) => {
    const avatar = "https://res.cloudinary.com/dhwbw94lc/image/upload/v1655720026/mmtetrupmel5r4c8qcaf.png";

    return(
        <Image 
            className={styles.div_avatar}
            loader={imageLoader}
            alt="image d'un avatar"
            src={avatar}
            width={custom.width}
            height={custom.height}
            unoptimized
        />
    )
};

export default ImgAvatar;