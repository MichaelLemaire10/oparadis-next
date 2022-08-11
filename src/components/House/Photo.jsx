import React from "react";
import styles from "../../../styles/House.module.css";
import ButtonUpdate from "../Button/ButtonUpdate";
import BigPhoto from "./Photo/BigPhoto";
import LittlePhoto from "./Photo/LittlePhoto";
import { arrayPhoto } from "../../selectors/data";
import { useDispatch, useSelector } from "react-redux";
import { setHouseFormPhoto } from "../../reducers/houses/slice";

const Photo = () => {
  const dispatch = useDispatch();
  const { photos } = useSelector(state => state.houses);

  React.useEffect(() => { dispatch(setHouseFormPhoto(photos)) }, []);

  const mainPhoto = photos.find(p => p.main_photo === true);
  const littlePhotos = photos.filter(p => p.main_photo === false);

  const custom = [
    styles.one,
    styles.two,
    styles.three,
    styles.four
  ];

  let bool;
  littlePhotos[0] ? bool = true : bool = false;

  const target = 'photo';

  return (
    <section className={styles.photos}>
      <ButtonUpdate custom={styles.button_update} target={target} />
      <BigPhoto mainPhoto={mainPhoto} />
      {bool && littlePhotos.map((p, i) => <LittlePhoto key={p.id} photo={p} styles={custom[i]} />)}
      {!bool && arrayPhoto.map((p, i) => <LittlePhoto key={p.id} photo={p} styles={custom[i]} />)}
    </section>
  );
}

export default Photo;
