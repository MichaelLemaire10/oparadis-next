import React from "react";
import styles from "../../../styles/House.module.css";
import { ArrayAnimal } from "../../selectors/ArrayData";
import Card from "./CardAnimal";

function SectionAnimal() {
  const [page, setPage] = React.useState(0);
  const [animal, setAnimal] = React.useState("");

  React.useEffect(() => { setAnimal(ArrayAnimal.at(page)) }, [page]);

  return (
    <section className={`${styles.animal} ${styles.card}`}>
      <Card obj={animal} />
      {page > 0 ?
        <button
          className={`${styles.button_slide} ${styles.button_slide_left}`}
          onClick={() => setPage(--page)}
        >{"<"}</button>
        :
        <button disabled className={`${styles.button_slide} ${styles.button_slide_left}`} >{"<"}</button>
      }
      {page < ArrayAnimal.length - 1 ?
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

export default SectionAnimal;
