import styles from "../../../styles/Form.module.css";
import { arrayIcon } from "../../selectors/data";
import IconForm from "./Icon";
import ButtonClose from "../Button/ButtonClose";
import ButtonValidation from "../Button/ButtonValidation";

const BoolForm = () => {

  return (
    <section className={styles.supply}>
      <ButtonClose custom={styles.button_close} target='boolForm' />
      <ButtonValidation custom={styles.button_validation} target='boolForm' />
      <div className={styles.supply_icon}>
        {arrayIcon.map(i => <IconForm key={i.id} obj={i} />)}
      </div>
    </section>
  );
}

export default BoolForm;
