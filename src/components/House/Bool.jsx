import React from "react";
import styles from "../../../styles/House.module.css";
import Icon from "./Icon";
import { arrayIcon } from "../../selectors/data";

function Bool() {
  return (
    <section className={styles.supply}>
    <div className={styles.supply_icon}>
      {arrayIcon.map(icon => <Icon key={icon.id} obj={icon} />)}
    </div>
  </section>
  );
}

export default Bool;
