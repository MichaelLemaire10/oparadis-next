import React from "react";
import styles from "../../../styles/House.module.css";
import Icon from "./Icon";
import { arrayIcon } from "../../selectors/data";
import ButtonUpdate from "../Button/ButtonUpdate";

function Bool() {
  const target = 'bool';

  return (
    <section className={styles.supply}>
      <ButtonUpdate custom={styles.button_update} target={target} />
      <div className={styles.supply_icon}>
        {arrayIcon.map(icon => <Icon key={icon.id} obj={icon} />)}
      </div>
    </section>
  );
}

export default Bool;
