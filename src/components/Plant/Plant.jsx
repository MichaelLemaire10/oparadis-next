/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../../../styles/House.module.css";
import Card from "./CardPlant";

function SectionPlant({ plants }) {
  // On récupere le numéro qui va etre utiliser 
  // avec la fonction "at()" ci-dessous
  const [page, setPage] = React.useState(0);
  const [plant, setPlant] = React.useState("");

  // Quand le state "page" est modifié alors on exécute la fonction 
  // pour mettre à jour le state ainsi que la fonction "at"qui va 
  // récuperer les infos qui sont à l'index défini dans le state "page".
  React.useEffect(() => { setPlant(plants.at(page)) }, [page]);

  return (
    <section className={`${styles.plant} ${styles.card}`}>
      {/* <h3>Une ou plusieurs plantes</h3> */}
      <Card obj={plant} />
      {/* si page est égal à 0 alors ajout la propriété "disabled" */}
      {page > 0 ?
        <button
          className={`${styles.button_slide} ${styles.button_slide_left}`}
          onClick={() => setPage(--page)}
        >{"<"}</button>
        :
        <button disabled className={`${styles.button_slide} ${styles.button_slide_left}`} >{"<"}</button>
      }
      {page < plants.length - 1 ?
        <button
          className={`${styles.button_slide} ${styles.button_slide_right}`}
          onClick={() => setPage(++page)}
        >{">"}</button>
        :
        <button disabled className={`${styles.button_slide} ${styles.button_slide_right}`} >{">"}</button>
      }
    </section>
  );
}

export default SectionPlant;
