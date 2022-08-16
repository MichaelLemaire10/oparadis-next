import React from "react";
import styles from "../../../styles/House.module.css";
import ButtonUpdate from "../Button/ButtonUpdate";
import BigPhoto from "./Photo/BigPhoto";
import LittlePhoto from "./Photo/LittlePhoto";
import { arrayPhoto } from "../../selectors/data";
import { useSelector } from "react-redux";

const Photo = () => {
  const { photos } = useSelector(state => state.houses);

  const mainPhoto = photos.find(p => p.main_photo === true);
  const littlePhotos = photos.filter(p => p.main_photo === false);

  let bool;
  littlePhotos[0] ? bool = true : bool = false;

  const target = 'photo';

  return (
    <section className={styles.photos}>
      <ButtonUpdate custom={styles.button_update} target={target} />
      <BigPhoto mainPhoto={mainPhoto} />
      {bool && littlePhotos.map( p => <LittlePhoto key={p.id} obj={p} />)}
      {!bool && arrayPhoto.map( p => <LittlePhoto key={p.id} obj={p} />)}
    </section>
  );
}

export default Photo;
