import React from "react";
import styles from "../../../styles/House.module.css";
import Icon from "./Icon";
import { arrayIcon } from "../../selectors/data";
import ButtonUpdate from "../button/buttonUpdate";

function Bool() {

  const buttonUpdate = { styles: styles.button_update };
  const target = 'bool';

  return (
    <section className={styles.supply}>
      <ButtonUpdate custom={buttonUpdate} target={target} />
      <div className={styles.supply_icon}>
        {arrayIcon.map(icon => <Icon key={icon.id} obj={icon} />)}
      </div>
    </section>
  );
}

export default Bool;
