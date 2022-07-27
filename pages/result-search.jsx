import styles from "../styles/ResultSearch.module.css";
import { LeafletWithNoSSR } from "../src/selectors/LeafletWithNoSSR";
import Image from "next/image";
import { ImgDarkMod as img1 } from "../src/selectors/img";
import { noImgHouse as img2 } from "../src/selectors/img";
import React from "react";

const ResultSearch = () => {
  const zoom = 4.5;

  return (
    <div className={styles.main}>
      <section className={styles.section_left}>
        <article className={styles.card}>
          <div className={styles.card_img}>
            <Image 
              layout="fill" 
              className={styles.card_img__img} 
              src={img1} 
              alt="image logement" 
            />
          </div>
          <div className={styles.card_text}>
            <h2 className={styles.card_text__name}>maison 1</h2>
            <p>Type du logement</p>
            <div className={styles.card_text__location}>
              <p>Ville</p>
              <p>Pays</p>
            </div>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.card_img}>
            <Image layout="fill" className={styles.card_img__img} src={img2} alt="image logement" />
          </div>
          <div className={styles.card_text}>
            <h2 className={styles.card_text__name}>maison 2</h2>
            <p>Type du logement</p>
            <div className={styles.card_text__location}>
              <p>Ville</p>
              <p>Fance</p>
            </div>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.card_img}>
            <Image layout="fill" className={styles.card_img__img} src={img1} alt="image logement" />
          </div>
          <div className={styles.card_text}>
            <h2 className={styles.card_text__name}>maison 3</h2>
            <p>Type du logement</p>
            <div className={styles.card_text__location}>
              <p>Ville</p>
              <p>Pays</p>
            </div>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.card_img}>
            <Image layout="fill" className={styles.card_img__img} src={img2} alt="image logement" />
          </div>
          <div className={styles.card_text}>
            <h2 className={styles.card_text__name}>maison 4</h2>
            <p>Type du logement</p>
            <div className={styles.card_text__location}>
              <p>Ville</p>
              <p>Pays</p>
            </div>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.card_img}>
            <Image layout="fill" className={styles.card_img__img} src={img1} alt="image logement" />
          </div>
          <div className={styles.card_text}>
            <h2 className={styles.card_text__name}>maison 5</h2>
            <p>Type du logement</p>
            <div className={styles.card_text__location}>
              <p>Ville</p>
              <p>Pays</p>
            </div>
          </div>
        </article>
      </section>
      <section className={styles.section_right}>
        <LeafletWithNoSSR style={styles.leaflet} zoom={zoom} />
      </section>
    </div>
  )
};

export default ResultSearch;