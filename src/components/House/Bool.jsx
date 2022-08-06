import React from "react";
import styles from "../../../styles/House.module.css";
import Icon from "./Icon";
import { arrayIcon } from "../../selectors/data";
import ButtonUpdate from "../Button/ButtonUpdate";
import { useSelector } from "react-redux";

function Bool() {
  const { house } = useSelector(state => state.houses);
  const target = 'bool';

  let bool;
  let i = 0;
  for (const key in house) if (house[key] === false) i++;
  i === 9 ? bool = false : bool = true ;
  
  return (
    <section className={styles.supply}>
      <ButtonUpdate custom={styles.button_update} target={target} />
      <div className={styles.supply_icon}>
        {bool && arrayIcon.map(icon => <Icon key={icon.id} obj={icon} />)}
        {!bool && <p>Pas de service</p>}
      </div>
    </section>
  );
}

export default Bool;
