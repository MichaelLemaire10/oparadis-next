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
import axios from "axios";

const HouseById = ({ house }) => {

  const { formPhoto, formText, formBool } = useSelector(state => state.booleans);
  const { errorsHouse, photos, houseDesc } = useSelector(state => state.houses);
  const zoom = 14;
  const sameId = houseDesc.id === house.id;

  //! à supprimer quand ajax sera en place !//
  const dispatch = useDispatch();
  React.useEffect(() => {
    photos.map(p => dispatch(setHouseFormPhoto(p)));
  }, []);


  return (
    <div className={styles.main}>
      {sameId &&
      <div className={styles.title}>
        <h2>
          Mon logement
        </h2>
        <ButtonDelete custom={styles.button_delete} />
      </div>}
      {formPhoto
        ? <SectionFormPhoto />
        : <SectionPhoto photos={house.photo} sameId={sameId} />}
      <div className={styles.container}>
        <SectionUser user={house.user} />
        <SectionCalendar />
        {formText
          ? <SectionFormText errors={errorsHouse} />
          : <SectionText house={house} sameId={sameId} />}
        <section className={styles.map}>
          <LeafletWithNoSSR 
            style={styles.leaflet} 
            zoom={zoom} 
            coordinates={new Array(house)}
          />
        </section>
        {formBool
          ? <SectionFormBool />
          : <SectionBool house={house} sameId={sameId} />}
        {house.animals[0] && <SectionAnimal animals={house.animals} />}
        {house.plants[0] && <SectionPlant plants={house.plants} />}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const url = process.env.URL;
  const res = await axios.get(`${url}/home/full/${context.query.id}`);

  return {
    props: { house: res.data }
  }
}

export default HouseById;
