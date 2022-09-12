import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../../styles/Form.module.css";
import { useUpdateHouseMutation } from "../../services/house";
import { arrayIcon } from "../../selectors/data";
import IconForm from "./Icon";
import ButtonClose from "../Button/ButtonClose";
import ButtonValidation from "../Button/ButtonValidation";
import Spinner from '../Spinner';
import { setHouse } from "../../selectors/function";
import { setShowFormBool } from "../../reducers/booleans/slice";

const BoolForm = () => {
  const dispatch = useDispatch();
  
  // Ajax
  const [updateHouseBoolMutation, { data, isLoading, isSuccess }] = useUpdateHouseMutation();
  
  // useEffect
  React.useEffect(() => { 
    if(data) {
      const house = data;
      setHouse({ house, dispatch });
      setTimeout(() => {
        dispatch(setShowFormBool(false));
      }, 100);
    };
  }, [isSuccess]);

  return (
    <section className={styles.supply}>
      {isLoading && <Spinner />}
      <ButtonClose custom={styles.button_close} target='boolForm' />
      <ButtonValidation
        custom={styles.button_validation}
        target='boolForm'
        updateHouseBoolMutation={updateHouseBoolMutation}
      />
      <div className={styles.supply_icon}>
        {arrayIcon.map(i => <IconForm key={i.id} obj={i} />)}
      </div>
    </section>
  );
}

export default BoolForm;
