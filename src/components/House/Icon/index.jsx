import styles from "../../../../styles/House.module.css";
import Image from "next/image";
import imagesLoader from "../../../../imagesLoader";

const Icon = ({ obj }) => {

    const boolObj = {
        internet: true,
        washing_machine: true,
        TV: false,
        hoven: true,
        microwaven: true,
        dishwasher: false,
        bathub: true,
        shower: true,
        parking: true
    };
    
    let bool;
    for (const key in boolObj) if (key === obj.name) bool = boolObj[key];

    return (
        <>
            {bool && (<p className={styles.icon}>
                <Image
                    src={obj.src}
                    className={styles.icon_img}
                    loader={imagesLoader}
                    unoptimized
                    width="64"
                    height="64"
                    alt={obj.alt}
                />
            </p>)
            }
        </>
    );
};

export default Icon