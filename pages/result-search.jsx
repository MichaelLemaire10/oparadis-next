import React from "react";
import styles from "../styles/ResultSearch.module.css";
import { LeafletWithNoSSR } from "../src/selectors/LeafletWithNoSSR";
import { useSelector } from "react-redux";
import HouseCard from "../src/components/HouseCard";
import { useGetHousesQuery } from "../src/services/house";

const ResultSearch = () => {
  const { searchHouses, search } = useSelector(state => state.houses);
  const { error, isLoading } = useGetHousesQuery();

  const zoom = 4.5;

  return (
    <div className={styles.main}>
      <section className={styles.section_left}>
        {!searchHouses[0] && <div>Nous n'avons pas trouvé de logement dans la ville : {search}</div>}
        {searchHouses &&
          searchHouses.map((h) => <HouseCard key={h.id} obj={h} />
          )}
      </section>
      <section className={styles.section_right}>
        <LeafletWithNoSSR style={styles.leaflet} zoom={zoom} />
      </section>
    </div>
  )
};

export default ResultSearch;