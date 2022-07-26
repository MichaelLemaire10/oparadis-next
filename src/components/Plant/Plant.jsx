/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../../../styles/House.module.css";
import { ArrayPlant } from "../../selectors/ArrayData";
import Card from "./CardPlant";

function SectionPlant() {
  const [page, setPage] = React.useState(0);
  const [plant, setPlant] = React.useState("");

  React.useEffect(() => { setPlant(ArrayPlant.at(page)) }, [page]);

  return (
    <section className={`${styles.plant} ${styles.card}`}>
      {/* <h3>Une ou plusieurs plantes</h3> */}
      <Card obj={plant} />
      {page > 0 ?
        <button
          className={`${styles.button_slide} ${styles.button_slide_left}`}
          onClick={() => setPage(--page)}
        >{"<"}</button>
        :
        <button disabled className={`${styles.button_slide} ${styles.button_slide_left}`} >{"<"}</button>
      }
      {page < ArrayPlant.length - 1 ?
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
