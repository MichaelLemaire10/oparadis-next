import Image from "next/image";
import imageLoader from "../../../imagesLoader";
import styles from "../../../styles/Header.module.css";
import { noImgAvatar } from "../../selectors/img";

const ImgAvatar = ({ custom, avatar }) => {

    return(
        <Image 
            className={styles.div_avatar}
            loader={imageLoader}
            alt="image d'un avatar"
            src={avatar ? avatar : noImgAvatar}
            width={custom.width}
            height={custom.height}
            unoptimized
        />
    )
};

export default ImgAvatar;