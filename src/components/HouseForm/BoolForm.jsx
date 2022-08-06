import styles from "../../../styles/Form.module.css";
import { arrayIcon } from "../../selectors/data";
import IconForm from "./Icon";
import ButtonClose from "../Button/ButtonClose";
import ButtonValidation from "../Button/ButtonValidation";

const BoolForm = () => {
  
  const target = 'boolForm';

  return (
    <section className={styles.supply}>
      <ButtonClose custom={styles.button_close} target={target} />
      <ButtonValidation custom={styles.button_validation} target={target} />
      <div className={styles.supply_icon}>
        {arrayIcon.map(i => <IconForm key={i.id} obj={i} />)}
      </div>
    </section>
  );
}

export default BoolForm;
