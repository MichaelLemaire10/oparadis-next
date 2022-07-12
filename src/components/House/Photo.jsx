import React from "react";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";
import imgHouse from "../../../public/house.jpg";
import styles from "../../../styles/House.module.css";

function Photo() {
  return (
    <section className={styles.photos}>
      <h3 className={styles.displayNone}>Photos du logement</h3>
      <div className={styles.photos_big}>
        <Image
          className={styles.photos_img}
          loader={imagesLoader}
          unoptimized
          src={imgHouse}
          alt="images house"
        />
      </div>
      <div className={`${styles.photos_little} ${styles.img} ${styles.one}`}>
        <Image
          className={styles.photos_img}
          loader={imagesLoader}
          unoptimized
          src={imgHouse}
          alt="images house"
        />
      </div>
      <div className={`${styles.photos_little} ${styles.img} ${styles.two}`}>
        <Image
          className={styles.photos_img}
          loader={imagesLoader}
          unoptimized
          src={imgHouse}
          alt="images house"
        />
      </div>
      <div className={`${styles.photos_little} ${styles.img} ${styles.three}`}>
        <Image
          className={styles.photos_img}
          loader={imagesLoader}
          unoptimized
          src={imgHouse}
          alt="images house"
        />
      </div>
      <div className={`${styles.photos_little} ${styles.img} ${styles.four}`}>
        <Image
          className={styles.photos_img}
          loader={imagesLoader}
          unoptimized
          src={imgHouse}
          alt="images house"
        />
      </div>
    </section>
  );
}

export default Photo;
