import styles from "../../styles/Form.module.css";
import { LeafletWithNoSSR } from "../../src/selectors/LeafletNoSSR";
import SectionFormPhoto from "../../src/components/HouseForm/PhotoForm";
import SectionFormText from "../../src/components/HouseForm/TextForm";
import SectionFormBool from "../../src/components/HouseForm/BoolForm";
import SectionAnimal from "../../src/components/Animal/Animal";
import SectionPlant from "../../src/components/Plant/Plant";

const HouseAdd = () => {
  const zoom = 14;

  const submitTheForm = () => {
    console.log("valider");
    //check input errors before sending the form data
    // setErrors(validation(userObject));
    // prevent form validation if password under 3 characters
    // userObject.password.length && userObject.repeat_password.length < 3 ? dispatch(formError()) : dispatch(signUp());
  };

  return (
    <div className={styles.main}>
      <h2>Ajouter un logement</h2>
      <form className={styles.main}>
          <SectionFormPhoto />
          <div className={styles.container}>
            <SectionFormText />
            <section className={styles.map}>
              <LeafletWithNoSSR style={styles.leaflet} zoom={zoom} />
            </section>
            <SectionFormBool />
            <SectionAnimal />
            <SectionPlant />
          </div>
      </form>
    </div>
  );
};

export default HouseAdd;
