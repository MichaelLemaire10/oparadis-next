/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/House.module.css";
import { LeafletWithNoSSR } from "../../src/selectors/LeafletWithNoSSR";
import SectionPhoto from "../../src/components/House/Photo";
import SectionText from "../../src/components/House/Text";
import SectionBool from "../../src/components/House/Bool";
import SectionAnimal from "../../src/components/Animal/Animal";
import SectionPlant from "../../src/components/Plant/Plant";

const HouseById = () => {
  const zoom = 14;

  return (
    <div className={styles.main}>
      <h2>Mon logement</h2>
      <SectionPhoto />
      <div className={styles.container}>
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
