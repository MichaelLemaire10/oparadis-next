import React from "react";
import styles from "../../../styles/House.module.css";
import Icon from "./Icon";
import { arrayIcon } from "../../selectors/data";
import ButtonUpdate from "../Button/ButtonUpdate";
import { useSelector } from "react-redux";

function Bool() {
  const { houseBool } = useSelector(state => state.houses);
  const target = 'bool';

  let bool;
  let i = 0;
  for (const key in houseBool) if (houseBool[key] === true) i++;
  i > 0 ? bool = true : bool = false ;
  
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
