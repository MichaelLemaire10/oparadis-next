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
import SectionFormPhoto from "../../src/components/HouseForm/PhotoForm";
import SectionFormText from "../../src/components/HouseForm/TextForm";
import SectionFormBool from "../../src/components/HouseForm/BoolForm";
import ButtonDelete from "../../src/components/Button/ButtonDelete";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setHouseFormPhoto } from "../../src/reducers/houses/slice";

const HouseById = () => {

  const zoom = 14;
  const { formPhoto, formText, formBool } = useSelector(state => state.booleans);
  const { errorsHouse, photos, houseDesc } = useSelector(state => state.houses);

  //! à supprimer !//
  const dispatch = useDispatch();
  React.useEffect(() => {
    photos.map(p => dispatch(setHouseFormPhoto(p)));
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>
          Mon logement
        </h2>
        <ButtonDelete custom={styles.button_delete} />
      </div>
      {formPhoto ? <SectionFormPhoto /> : <SectionPhoto />}
      <div className={styles.container}>
        <SectionUser />
        <SectionCalendar />
        {formText ? <SectionFormText errors={errorsHouse} /> : <SectionText />}
        <section className={styles.map}>
          <LeafletWithNoSSR
            style={styles.leaflet}
            zoom={zoom}
            coordinates={new Array(houseDesc)} />
        </section>
        {formBool ? <SectionFormBool /> : <SectionBool />}
        <SectionAnimal />
        <SectionPlant />
      </div>
    </div>
  );
};

export default HouseById;
