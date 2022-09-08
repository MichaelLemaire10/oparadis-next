import React from "react";
import styles from "../../../styles/Form.module.css";
import { useUpdateHouseMutation } from "../../services/house";
import { arrayIcon } from "../../selectors/data";
import IconForm from "./Icon";
import ButtonClose from "../Button/ButtonClose";
import ButtonValidation from "../Button/ButtonValidation";
// import Spinner from '../Spinner';

const BoolForm = () => {

  // Ajax
  // const [updateHouseBoolMutation, { data, isLoading, isSuccess }] = useUpdateHouseMutation();
  
  // useEffect
  // React.useEffect(() => { if (isSuccess) dispatch(setShowFormBool(false)); } ,[isSuccess]);

  return (
    <section className={styles.supply}>
      {/* {isLoading && <Spinner />} */}
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
