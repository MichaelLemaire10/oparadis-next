import React from "react";
import styles from "../styles/ResultSearch.module.css";
import { LeafletWithNoSSR } from "../src/selectors/LeafletWithNoSSR";
import { useSelector } from "react-redux";
import HouseCard from "../src/components/HouseCard";
import ErrorPage from "./404";
import { useGetHousesQuery } from "../src/services/house";
import Spinner from "../src/components/spinner";

const ResultSearch = () => {

  const { isError, isLoading } = useGetHousesQuery();

  const { searchHouses, search } = useSelector(state => state.houses);

  let coordinates = [];
  if (searchHouses) coordinates = searchHouses.map(h => ({ lat: h.latitude, lng: h.longitude, id: h.id, city: h.city }));

  const zoom = 4.5;

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <ErrorPage />}
      {!isError && <div className={styles.main}>
        <section className={styles.section_left}>
          {!searchHouses && <div>Nous n'avons pas trouvé de logement dans la ville : {search}</div>}
          {searchHouses &&
            searchHouses.map((h) => <HouseCard key={h.id} obj={h} />
            )}
        </section>
        <section className={styles.section_right}>
          <LeafletWithNoSSR style={styles.leaflet} zoom={zoom} coordinates={coordinates} />
        </section>
      </div>}
    </>
  )
};

export default ResultSearch;