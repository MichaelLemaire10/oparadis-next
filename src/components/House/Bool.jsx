import React from "react";
import styles from "../../../styles/House.module.css";
import Icon from "./Icon";
import { arrayIcon } from "../../selectors/data";
import ButtonUpdate from "../Button/ButtonUpdate";

function Bool({ house, sameId }) {

  const houseBool = {
    internet: house.internet,
    washing_machine: house.washing_machine,
    TV: house.TV,
    hoven: house.hoven,
    microwaven: house.microwaven,
    dishwasher: house.dishwasher,
    bathub: house.bathub,
    shower: house.shower,
    parking: house.parking,
   };
   
  const target = 'bool';

  let bool;
  let i = 0;
  for (const key in houseBool) if (houseBool[key] === true) i++;
  i > 0 ? bool = true : bool = false ;
  
  return (
    <section className={styles.supply}>
      {sameId && <ButtonUpdate custom={styles.button_update} target={target} />}
      <div className={styles.supply_icon}>
        {bool && arrayIcon.map(icon => 
        <Icon key={icon.id} obj={icon} houseBool={houseBool} />
        )}
        {!bool && <p>Pas de service</p>}
      </div>
    </section>
  );
}

export default Bool;
