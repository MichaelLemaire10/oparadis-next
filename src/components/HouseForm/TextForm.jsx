/* eslint-disable react/no-unescaped-entities */
import { Box, TextField } from "@mui/material";
import React from "react";
import styles from "../../../styles/Form.module.css";
import { ThemeProvider, Button } from "@material-ui/core";

const types = [
  {
    value: "Maison",
    label: "Maison",
  },
  {
    value: "Appartement",
    label: "Appartement",
  },
  {
    value: "Chateau",
    label: "Chateau",
  },
  {
    value: "Loft",
    label: "Loft",
  },
];
const countries = [
  {
    value: "France",
    label: "France",
  },
  {
    value: "Italie",
    label: "Italie",
  },
  {
    value: "Belgique",
    label: "Belgique",
  },
  {
    value: "Espagne",
    label: "Espagne",
  },
];

const TextForm = ({ theme }) => {
  const [type, setType] = React.useState("Maison");
  const [country, setCountry] = React.useState("France");

  const handleChangeType = (event) => setType(event.target.value);
  const handleChangeCountry = (event) => setCountry(event.target.value);

  const submitFormText = (e) => {
    e.preventDefault();
    console.log('envoie du text');
  }
  return (
    <section className={styles.desc}>
      <h3 className={styles.displayNone}>Description du logement</h3>
      <div className={styles.desc_detailed}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 0.5},
          }}
          noValidate
          autoComplete="on"
        >
          <h4 className={styles.desc_detailed__title}>
                <TextField
                  id="standard-title"
                  label="Titre"
                  type="search"
                  variant="standard"
                />
          </h4>
          <div className={styles.desc_detailed__info}>
            <div className={styles.desc_detailed__text}>
              <div className={styles.desc_detailed__text_left}>
                <TextField
                  id="standard-select-currency-native-type"
                  select
                  label="Selectionner le type"
                  value={type}
                  onChange={handleChangeType}
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  sx={{ width: "20ch" }}
                >
                  {types.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="standard-address"
                  label="Adresse"
                  type="search"
                  variant="standard"
                  sx={{ width: "20ch" }}
                />
                {" "}
                <TextField
                  id="standard-zip-code"
                  label="Code postal"
                  type="search"
                  variant="standard"
                  sx={{ width: "11ch" }}
                />
                {" "}
                <TextField
                  id="standard-city"
                  label="Ville"
                  type="search"
                  variant="standard"
                  sx={{ width: "20ch" }}
                />
                {" "}
                <TextField
                  id="standard-select-currency-native-country"
                  select
                  label="Selectionner le pays"
                  value={country}
                  onChange={handleChangeCountry}
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  sx={{ width: "15ch" }}
                >
                  {countries.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="standard-number-pieces"
                  label="Nombres de pièces"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  sx={{ width: "20ch" }}
                />
              </div>
              <div className={styles.desc_detailed__text_right}>
                {" "}
                <TextField
                  id="standard-number-room"
                  label="Nombres de chambres"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />{" "}
                <TextField
                  id="standard-number-surface"
                  label="Surface de la maison"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
                <TextField
                  id="standard-number-area"
                  label="Taille du terrain"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
                <TextField
                  id="standard-number-stage"
                  label="Nombre d'étage"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
              </div>
            </div>
            <div className={styles.desc_detailed__desc}>
            <TextField
              id="standard-textarea"
              label="Description"
              fullWidth
              placeholder=""
              rows={3}
              multiline
              variant="standard"
            />
            </div>
          </div>
        </Box>
        <ThemeProvider theme={theme}>
          <Button
            className={styles.button_send}
            variant="contained"
            color="primary"
            type="submit"
            onClick={submitFormText}
          >
            Envoyer
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
}

export default TextForm;
