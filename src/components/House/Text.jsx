/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/House.module.css";
import ButtonUpdate from "../Button/ButtonUpdate";

const Text = () => {
  const { house } = useSelector( state => state.houses);
  const { 
    title, address, zipcode, city,
    rooms, bedrooms, surface, area, floor,
    description, type, country
  } = house;
  const target = 'text';

  return (
    <section className={styles.desc}>
      <ButtonUpdate custom={styles.button_update} target={target} />
      <h3 className={styles.displayNone}>Description du logement</h3>
      <div className={styles.desc_detailed}>
        <h4 className={styles.desc_detailed__title}>
          {title}
          </h4>
        <div className={styles.desc_detailed__info}>
          <div className={styles.desc_detailed__text}>
            <div className={styles.desc_detailed__text_left}>
              <p>{type.type}</p>
              <p>{address}</p>
              <p>{zipcode} {city}, {country.country}</p>
              <p><span>Nombre de Chambre: </span>{rooms}</p>
            </div>
            <div className={styles.desc_detailed__text_right}>
              <p><span>Nombre de lit: </span>{bedrooms}</p>
              <p><span>Surface de la maison: </span>{surface}m²</p>
              <p><span>Taille du terrain: </span>{area}m²</p>
              <p><span>Nombre d'étage: </span>{floor}</p>
            </div>
          </div>
          <div className={styles.desc_detailed__desc}>
            <p>
              <span>Description: </span>{description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Text;
