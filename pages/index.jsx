/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import HomeLogo from "../src/components/Home/homeLogo";
import HouseFour from "../src/components/Home/HouseFour";
import Cards from "../src/components/Home/Cards";
import styles from "../styles/Home.module.css";
import { array } from "../src/selectors/data";
import axios from "axios";
import { updateHouse } from "../src/reducers/houses/slice";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ arrayHouse }) => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.houses.title);
  const handleTest = () => dispatch(updateHouse('blabal'));

  return (
    <div className={styles.container}>
      <Head>
        <title>O'Paradis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <button onClick={handleTest}>test: {test}</button>
        <section className={styles.section_up}>
          <HomeLogo />
        </section>
        <section className={styles.section_middle}>
          {arrayHouse.map(house => <HouseFour key={house.id} obj={house} date={new Date(house.created_at)} />)}
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
    props: { arrayHouse: res.data },
  };
};

export default Home;
