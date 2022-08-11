import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import { noImgHouse } from "../../../selectors/img";
import styles from "../../../../styles/House.module.css";

const BigPhoto = ({mainPhoto}) => {

    return (
        <div className={styles.photos_big}>
            <Image
                className={styles.photos_img}
                loader={imagesLoader}
                unoptimized
                src={mainPhoto ? mainPhoto.photo : noImgHouse}
                layout="fill"
                alt="images house"
            />
        </div>
    );
};

export default BigPhoto;