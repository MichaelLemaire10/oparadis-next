import styles from "../../../../styles/House.module.css";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";

const Icon = ({ obj, houseBool }) => {
    
    let bool;
    for (const key in houseBool) if (key === obj.name) bool = houseBool[key];
    
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