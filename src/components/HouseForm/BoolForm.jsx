import React from "react";
import Image from "next/image";
import imagesLoader from "../../../imagesLoader";
import styles from "../../../styles/Form.module.css";

function BoolForm() {

  const [done, setDone] = React.useState({
    internet: false,
    washine_machine: false,
    TV: false,
    hoven: false,
    microwaven: false,
    dishwasher: false,
    bathtub: false,
    shower: false,
    parking: false,
  });

  // fonction pour valider un bool
  const handleOnChange = (e) => {
    const getName = e.target.getAttribute('name');
    const boolInput = {
      ...done,
      [getName]: !done[getName],
    };
    setDone(boolInput);
  };

  return (
    <section className={styles.supply}>
    <div className={styles.supply_icon}>
      <label htmlFor="internet" className={styles.icon}>
        <input 
        className={styles.displayNone}
        type="checkbox" 
        id="internet" 
        name="internet"
        checked={done.internet}
        onChange={handleOnChange}
        />
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196755/icon/wifi_tdnu4f.png"
          className={done.internet ?`${styles.icon_img}` : `${styles.icon_img_false}`}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon wifi" 
        />
      </label>
      <label htmlFor="washine_machine" className={styles.icon}>
      <input 
        className={styles.displayNone}
        type="checkbox" 
        id="washine_machine" 
        name="washine_machine"
        checked={done.washine_machine}
        onChange={handleOnChange}
        />
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/machine-a-laver_onetfi.png"
          className={done.washine_machine ?`${styles.icon_img}` : `${styles.icon_img_false}`}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon washine-machine" 
        />
      </label>
      <label htmlFor="TV" className={styles.icon}>
      <input 
        className={styles.displayNone}
        type="checkbox" 
        id="TV"
        name="TV"
        checked={done.TV}
        onChange={handleOnChange}
        />
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196755/icon/television_wfe4ae.png"
          className={done.TV ?`${styles.icon_img}` : `${styles.icon_img_false}`}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon TV" 
        />
      </label>
      <label htmlFor="hoven" className={styles.icon}>
      <input 
        className={styles.displayNone}
        type="checkbox" 
        id="hoven"
        name="hoven"
        checked={done.hoven}
        onChange={handleOnChange}
        />
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/four_mvgmeg.png"
          className={done.hoven ?`${styles.icon_img}` : `${styles.icon_img_false}`}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon hoven" 
        />
      </label>
      <label htmlFor="microwaven" className={styles.icon}>
      <input 
        className={styles.displayNone}
        type="checkbox" 
        id="microwaven"
        name="microwaven"
        checked={done.microwaven}
        onChange={handleOnChange}
        />
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/micro-onde_vu1wyo.png"
          className={done.microwaven ?`${styles.icon_img}` : `${styles.icon_img_false}`}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon microwaven" 
        />
      </label>
      <label htmlFor="dishwasher" className={styles.icon}>
      <input 
        className={styles.displayNone}
        type="checkbox" 
        id="dishwasher"
        name="dishwasher"
        checked={done.dishwasher}
        onChange={handleOnChange}
        />
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/dishwasher_plges9.png"
          className={done.dishwasher ?`${styles.icon_img}` : `${styles.icon_img_false}`}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon Dishwasher" 
        />
      </label>
      <label htmlFor="bathtub" className={styles.icon}>
      <input 
        className={styles.displayNone}
        type="checkbox" 
        id="bathtub"
        name="bathtub"
        checked={done.bathtub}
        onChange={handleOnChange}
        />
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/baignoire_keicr6.png"
          className={done.bathtub ?`${styles.icon_img}` : `${styles.icon_img_false}`}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon bathtub" 
        />
      </label>
      <label htmlFor="shower" className={styles.icon}>
        <input 
        className={styles.displayNone}
        type="checkbox" 
        id="shower"
        name="shower"
        checked={done.shower}
        onChange={handleOnChange}
        />
        <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196754/icon/douche_a5n1kv.png"
          className={done.shower ?`${styles.icon_img}` : `${styles.icon_img_false}`}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon shower" 
        />
      </label>
      <label htmlFor="parking" className={styles.icon}>
        <input 
        className={styles.displayNone}
        type="checkbox" 
        id="parking"
        name="parking"
        checked={done.parking}
        onChange={handleOnChange}
        />
      <Image 
          src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1655196755/icon/parking_mejxtr.png"
          className={done.parking ?`${styles.icon_img}` : `${styles.icon_img_false}`}
          loader={imagesLoader}
          unoptimized 
          width="64"
          height="64"
          alt="icon parking" 
        />
      </label>
    </div>
  </section>
  );
}

export default BoolForm;
