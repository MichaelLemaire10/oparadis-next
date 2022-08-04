import styles from "../../styles/Form.module.css";
import { LeafletWithNoSSR } from "../../src/selectors/LeafletWithNoSSR";
import SectionFormPhoto from "../../src/components/HouseForm/PhotoForm";
import SectionFormText from "../../src/components/HouseForm/TextForm";
import SectionFormBool from "../../src/components/HouseForm/BoolForm";
import SectionAnimal from "../../src/components/Animal/Animal";
import SectionPlant from "../../src/components/Plant/Plant";
import { createTheme } from "@material-ui/core";

const HouseAdd = () => {
  const zoom = 14;
  
  // New styles pour le bouton
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(139, 186, 249)",
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <div className={styles.main}>
      <h2>Page voué à disparaître</h2>
    </div>
  );
};

export default HouseAdd;
