import React from "react";
import styles from "../styles/ResultSearch.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useGetHousesQuery } from "../src/services/house";
import { LeafletWithNoSSR } from "../src/selectors/LeafletWithNoSSR";
import { noImgHouse } from "../src/selectors/img";
import ErrorPage from "./404";
import Spinner from "../src/components/spinner";

const ResultSearch = () => {

  const { isError, isLoading } = useGetHousesQuery();

  const { searchHouses, search } = useSelector(state => state.houses);

  let coordinates = [];
  if (searchHouses) coordinates = searchHouses.map(h => (
    { latitude: h.latitude, longitude: h.longitude,
       id: h.id, city: h.city, map: h.map }
  ));
  
  const zoom = 4.5;

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <ErrorPage />}
      {!isError && <div className={styles.main}>
        <section className={styles.section_left}>
          {!searchHouses && <div>Nous n'avons pas trouvé de logement dans la ville : {search}</div>}
          {searchHouses &&
            searchHouses.map((
              { id, title, type, country, city, photo }
            ) => {
              const mainPhoto = photo.find(p => p.main_photo === true);
              return (
                <Link key={id} href={`/house/${id}`}>
                  <article className={styles.card}>
                    <div className={styles.card_img}>
                      <Image
                        layout="fill"
                        className={styles.card_img__img}
                        src={mainPhoto ? mainPhoto.photo : noImgHouse}
                        alt="image logement"
                      />
                    </div>
                    <div className={styles.card_text}>
                      <h2 className={styles.card_text__name}>{title}</h2>
                      <p>{type.type}</p>
                      <div className={styles.card_text__location}>
                        <p>{city},</p>
                        <p>{country.country}</p>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
        </section>
        <section className={styles.section_right}>
          <LeafletWithNoSSR
            style={styles.leaflet}
            zoom={zoom}
            coordinates={coordinates} />
        </section>
      </div>}
    </>
  )
};

export default ResultSearch;