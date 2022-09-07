/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Head from "next/head";
import HomeLogo from "../src/components/Home/homeLogo";
import ImgHouse from "../src/components/Image/ImgHouse";
import Cards from "../src/components/Home/Cards";
import { array } from "../src/selectors/data";

const Home = ({ arrayHouse }) => {  

  return (
    <div className={styles.container}>
      <Head>
        <title>O'Paradis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <section className={styles.section_up}>
          <HomeLogo />
        </section>
        <section className={styles.section_middle}>

          {arrayHouse.map(h => {
            const custom = {
              width: 300,
              height: 175,
              styles: styles.card_img__img,
            };

            // On recupère la photo qui doit etre affiché
            const picture = h.photo.filter(p => p.main_photo === true);
            // On vérifie si une photo existe
            const bool = h.photo[0] ? true : false;

            return (
              <Link key={h.id} href={`/house/${h.id}`}>
                {/* <HouseFour obj={h} date={new Date(h.created_at)} /> */}
                <article className={styles.card}>
                  <div className={styles.card_img}>
                    {/* si une photo avec main_photo a true alors tu exécutes bool */}
                    {bool && <ImgHouse custom={custom} key={picture[0].id} data={picture[0]} />}
                    {!bool && <ImgHouse data={{ main_photo: false }} custom={custom} />}
                  </div>
                  <div className={styles.card_text}>
                    <h2 className={styles.card_text__name}>{h.title}</h2>
                    <p>{h.type.type}</p>
                    <div className={styles.card_text__location}>
                      <p>{h.city}</p>
                      <p>{h.country.country}</p>
                    </div>
                    <p>{h.created_at}</p>
                  </div>
                </article>
              </Link>
            )
          })}

        </section>
        <section className={styles.section_down}>
          {array.map(a => <Cards key={a.id} obj={a} />)}
        </section>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const url = process.env.URL;
  const res = await axios.get(`${url}/`);
  return {
    props: { arrayHouse: res.data }
  };
};

export default Home;
