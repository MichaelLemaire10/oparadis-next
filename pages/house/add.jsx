import React from "react";
import styles from "../../styles/Form.module.css";
import axios from "axios";
import SectionFormText from "../../src/components/HouseForm/TextForm";
import {
  DialogActions,
  Button,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setErrorsHouse } from "../../src/reducers/houses/slice";
import { validationHouse } from "../../src/selectors/validation";


const HouseAdd = ({ types, countries }) => {
  const dispatch = useDispatch();
  const { errorsHouse, houseFormDesc } = useSelector(state => state.houses);
  const targetPage = 'addHouse';

  // New styles pour le bouton
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(139, 186, 249)",
        contrastText: "#ffffff",
      },
    },
  });

  const submitTheFormDesc = async () => {
    // check input errors before sending the form data
    dispatch(setErrorsHouse(validationHouse(houseFormDesc)));
    // Last check with condition 
    if (
      houseFormDesc.address && houseFormDesc.zipcode 
      && houseFormDesc.city && !errorsHouse.address 
      && !errorsHouse.zipcode && !errorsHouse.city
      ) {
      console.log("envoyer desc");
    };
  };

  return (
    <div className={styles.main}>
      <h2>Créer un logement</h2>
      <SectionFormText
        errors={errorsHouse}
        targetPage={targetPage}
        countries={countries}
        types={types}
      />
      <DialogActions>
        <ThemeProvider theme={theme} >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={submitTheFormDesc}
          >
            Envoyer
          </Button>
        </ThemeProvider>
      </DialogActions>
    </div>
  );
};

export default HouseAdd;

export async function getStaticProps() {
  
  const url = process.env.URL;
  const arrayType = await axios.get(`${url}/types`);
  const arrayCountry = await axios.get(`${url}/countries`);

  return {
    props: {
      countries: arrayCountry.data,
      types: arrayType.data
    },
  };
};