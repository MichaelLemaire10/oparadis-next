import React from "react";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";
import styles from "../../../styles/House.module.css";

function Bool() {
  return (
    <section className={styles.supply}>
    <div className={styles.supply_icon}>
      <p className={styles.icon}>
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196755/icon/wifi_tdnu4f.png"
          className={styles.icon_img}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon wifi" 
        />
      </p>
      <p className={styles.icon}>
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/machine-a-laver_onetfi.png"
          className={styles.icon_img}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon washine-machine" 
        />
      </p>
      <p className={styles.icon}>
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196755/icon/television_wfe4ae.png"
          className={styles.icon_img}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon TV" 
        />
      </p>
      <p className={styles.icon}>
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/four_mvgmeg.png"
          className={styles.icon_img}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon hoven" 
        />
      </p>
      <p className={styles.icon}>
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/micro-onde_vu1wyo.png"
          className={styles.icon_img}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon microwaven" 
        />
      </p>
      <p className={styles.icon}>
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/dishwasher_plges9.png"
          className={styles.icon_img}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon dishwasher" 
        />
      </p>
      <p className={styles.icon}>
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/baignoire_keicr6.png"
          className={styles.icon_img}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon bathtub" 
        />
      </p>
      <p className={styles.icon}>
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/douche_a5n1kv.png"
          className={styles.icon_img}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon shower" 
        />
      </p>
      <p className={styles.icon}>
      <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196755/icon/parking_mejxtr.png"
          className={styles.icon_img}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon parking" 
        />
      </p>
    </div>
  </section>
  );
}

export default Bool;
