import styles from "../../../../styles/House.module.css";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";
import { useSelector } from "react-redux";

const Icon = ({ obj }) => {
    const { house } = useSelector(state => state.houses);
    
    let bool;
    for (const key in house) if (key === obj.name) bool = house[key];
    
    return (
        <>
            {bool && (
                <p className={styles.icon}>
                    <Image
                        src={obj.src}
                        className={styles.icon_img}
                        loader={imagesLoader}
                        unoptimized
                        width="64"
                        height="64"
                        alt={obj.alt}
                    />
                </p>
            )}
        </>
    );
};

export default Icon