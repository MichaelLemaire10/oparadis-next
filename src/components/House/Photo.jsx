import React from "react";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";
import { noImgHouse as imgHouse } from "../../../src/selectors/img";
import styles from "../../../styles/House.module.css";
import ButtonUpdate from "../Button/ButtonUpdate";

const Photo = () => {
  const target = 'photo';

  return (
    <section className={styles.photos}>
      <ButtonUpdate custom={styles.button_update} target={target} />
      <div className={styles.photos_big}>
        <Image
          className={styles.photos_img}
          loader={imagesLoader}
          unoptimized
          src={imgHouse}
          layout="fill"
          alt="images house"
        />
      </div>
      <div className={`${styles.photos_little} ${styles.img} ${styles.one}`}>
        <Image
          className={styles.photos_img}
          loader={imagesLoader}
          unoptimized
          src={imgHouse}
          layout="fill"
          alt="images house"
        />
      </div>
      <div className={`${styles.photos_little} ${styles.img} ${styles.two}`}>
        <Image
          className={styles.photos_img}
          loader={imagesLoader}
          unoptimized
          src={imgHouse}
          layout="fill"
          alt="images house"
        />
      </div>
      <div className={`${styles.photos_little} ${styles.img} ${styles.three}`}>
        <Image
          className={styles.photos_img}
          loader={imagesLoader}
          unoptimized
          src={imgHouse}
          layout="fill"
          alt="images house"
        />
      </div>
      <div className={`${styles.photos_little} ${styles.img} ${styles.four}`}>
        <Image
          className={styles.photos_img}
          loader={imagesLoader}
          unoptimized
          src={imgHouse}
          layout="fill"
          alt="images house"
        />
      </div>
    </section>
  );
}

export default Photo;
