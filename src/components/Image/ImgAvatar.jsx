import Image from "next/image";
import { useSelector } from "react-redux";
import imageLoader from "../../../imagesLoader";
import styles from "../../../styles/Header.module.css";

const ImgAvatar = ({ custom }) => {

    const { user } = useSelector((state) => state.users);
    
    return(
        <Image 
            className={styles.div_avatar}
            loader={imageLoader}
            alt="image d'un avatar"
            src={user.avatar}
            width={custom.width}
            height={custom.height}
            unoptimized
        />
    )
};

export default ImgAvatar;