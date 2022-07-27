import Image from "next/image";
import imageLoader from "../../../imagesLoader";
import styles from "../../../styles/Header.module.css";
import { noImgAvatar as avatar } from "../../selectors/img";

const ImgAvatar = ({ custom }) => {

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