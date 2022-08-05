/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../../../styles/House.module.css";
import ButtonUpdate from "../Button/ButtonUpdate";

const Text = () => {
  const target = 'text';

  return (
    <section className={styles.desc}>
      <ButtonUpdate custom={styles.button_update} target={target} />
      <h3 className={styles.displayNone}>Description du logement</h3>
      <div className={styles.desc_detailed}>
        <h4 className={styles.desc_detailed__title}>Titre</h4>
        <div className={styles.desc_detailed__info}>
          <div className={styles.desc_detailed__text}>
            <div className={styles.desc_detailed__text_left}>
              <p>Chateau</p>
              <p>42 boulevard des pigeons</p>
              <p>60000 Saint Julien les Villas, France</p>
              <p><span>Pieces: </span>15</p>
            </div>
            <div className={styles.desc_detailed__text_right}>
              <p><span>Chambres: </span>75</p>
              <p><span>Surface de la maison: </span>200m²</p>
              <p><span>Taille du terrain: </span>2000m²</p>
              <p><span>Nombre d'étage: </span>5</p>
            </div>
          </div>
          <div className={styles.desc_detailed__desc}>
            <p>
              <span>Description: </span>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati dolore provident laboriosam,
              tenetur sapiente veniam recusandae. Pariatur porro veniam
              aperiam ad distinctio, quidem molestiae eos, perferendis at
              harum, soluta autem?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Text;
