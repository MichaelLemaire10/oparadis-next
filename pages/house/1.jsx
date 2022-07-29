/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/House.module.css";
import { LeafletWithNoSSR } from "../../src/selectors/LeafletWithNoSSR";
import SectionPhoto from "../../src/components/House/Photo";
import SectionUser from "../../src/components/House/User";
import SectionCalendar from "../../src/components/House/Calendar";
import SectionText from "../../src/components/House/Text";
import SectionBool from "../../src/components/House/Bool";
import SectionAnimal from "../../src/components/Animal/Animal";
import SectionPlant from "../../src/components/Plant/Plant";
import ButtonDelete from "../../src/components/button/buttonDelete";

const HouseById = () => {
  
  const zoom = 14;
  const btnDelete = { styles: styles.button_delete };

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>
          Mon logement
        </h2>
        <ButtonDelete custom={btnDelete} />
      </div>
      <SectionPhoto />
      <div className={styles.container}>
        <SectionUser />
        <SectionCalendar />
        <SectionText />
        <section className={styles.map}>
          <LeafletWithNoSSR style={styles.leaflet} zoom={zoom} />
        </section>
        <SectionBool />
        <SectionAnimal />
        <SectionPlant />
      </div>
    </div>
  );
};

export default HouseById;
