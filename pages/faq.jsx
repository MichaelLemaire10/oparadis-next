/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/Footer.module.css";

const Faq = () => {
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_one}>
          <h2>Le concept</h2>
          <p>
            O’Paradis est un site permettant d’ouvrir au plus grand nombre le
            concept de homesitting.
          </p>
        </div>
        <div className={styles.wrapper_two}>
          <h2>Principe</h2>
          <p>
            Le principe du home-sitting est d'engager des gardiens de maisons
            appelés home-sitters ou house-sitters à surveiller l'appartement ou
            la maison de propriétaires et de s'occuper de leurs animaux et leurs
            plants quand ces derniers s'absentent pour des vacances ou pour
            n'importe quelle autre raison. Cette absence peut être de quelques
            jours à plusieurs semaines, voire des mois.
          </p>
        </div>
        <div className={styles.wrapper_three}>
          <h2>L'ouverture</h2>
          <p>
            Nous avons décidé de proposer ce site pour permettre de proposer ce
            service aux jeunes et aux moins jeunes. En effet, quand on regarde
            les sites de home-sitting existants, on trouve quantité de sites de
            ce type mais qui ne sont ouverts qu’aux retraités.
          </p>
        </div>
        <div className={styles.wrapper_four}>
          <h2>Ca compte aussi...</h2>
          <p>
            Dans notre projet, il y a aussi une composante importante concernant
            le gardiennage des animaux des home-owners. Il faut donc que les
            home-sitters soient à l’aise avec les animaux et avoir des
            compétences pour s’en occuper.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
