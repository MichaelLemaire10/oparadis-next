import React from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import styles from "../../styles/Form.module.css";
import SectionFormText from "../../src/components/HouseForm/TextForm";
import {
  DialogActions,
  Button,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setErrorsHouse, setHouseFormDesc } from "../../src/reducers/houses/slice";
import { validationHouse } from "../../src/selectors/validation";
import { useSetHouseMutation } from "../../src/services/house";
import { setHouse } from "../../src/selectors/function";


const HouseAdd = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const targetPage = 'addHouse';

  // Ajax
  const [postHouseMutation, { data, isSuccess, error }] = useSetHouseMutation();
  console.log('error =>', error);
  console.log('data =>', data);

  // useSelector
  const { errorsHouse, houseFormDesc, countries, types } = useSelector(state => state.houses);

  // New styles pour le bouton
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(139, 186, 249)",
        contrastText: "#ffffff",
      },
    },
  });

  // useEffect
  React.useEffect(() => { 
    if(data) {
      const house = data;
      setHouse({ house, dispatch });
      setTimeout(() => {
        router.push(`/house/${data.id}`)
      }, 1000);
    };
  }, [isSuccess]);

  const submitTheFormDesc = async () => {
    // check input errors before sending the form data
    dispatch(setErrorsHouse(validationHouse(houseFormDesc)));
    // Last check with condition 
    if (
      houseFormDesc.address && houseFormDesc.zipcode 
      && houseFormDesc.city && !errorsHouse.address 
      && !errorsHouse.zipcode && !errorsHouse.city
      ) {
      const { address, zipcode } = houseFormDesc;
      const query = `q=${address.replace(/\s/g, '+')}&postcode=${zipcode.replace(/\s/g, '')}`;
      const { data: { features } } = await axios.get(`https://api-adresse.data.gouv.fr/search/?${query}`);
      if(features[0]) {
        const long = JSON.stringify(features[0].geometry.coordinates[0]);
        const lat = JSON.stringify(features[0].geometry.coordinates[1]);
        // requete ajax
        postHouseMutation({
          ...houseFormDesc,
          latitude: lat,
          longitude: long,
          map: `https://maps.google.com/maps?q=${lat},${long}`,
        });
      } else {
        dispatch(setErrorsHouse(validationHouse(
          { ...houseFormDesc, address: 'inconnu'}
          )));
      };
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

// export async function getStaticProps() {
  
//   const url = process.env.URL;
//   const arrayType = await axios.get(`${url}/types`);
//   const arrayCountry = await axios.get(`${url}/countries`);

//   return {
//     props: {
//       countries: arrayCountry.data,
//       types: arrayType.data
//     },
//   };
// };