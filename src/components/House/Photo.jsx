import React from "react";
import styles from "../../../styles/House.module.css";
import ButtonUpdate from "../Button/ButtonUpdate";
import BigPhoto from "./Photo/BigPhoto";
import LittlePhoto from "./Photo/LittlePhoto";
import { arrayPhoto } from "../../selectors/data";

const Photo = ({ photos, sameId }) => {

  const mainPhoto = photos.find(p => p.main_photo === true);
  const littlePhotos = photos.filter(p => p.main_photo === false);

  let bool;
  littlePhotos[0] ? bool = true : bool = false;

  const target = 'photo';

  return (
    <section className={styles.photos}>
      {sameId && <ButtonUpdate custom={styles.button_update} target={target} />}
      <BigPhoto mainPhoto={mainPhoto} />
      {bool && littlePhotos.map( p => <LittlePhoto key={p.id} obj={p} />)}
      {!bool && arrayPhoto.map( p => <LittlePhoto key={p.id} obj={p} />)}
    </section>
  );
}

export default Photo;
