/* eslint-disable react/no-unescaped-entities */
import { Box, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../styles/Form.module.css";
import ButtonClose from "../Button/ButtonClose";
import ButtonValidation from "../Button/ButtonValidation";
import { setHouseFormDesc, setHouseFormDescType, setHouseFormDescCountry } from "../../reducers/houses/slice";

const types = [
  {
    id: 1,
    value: "Maison",
  },
  {
    id: 2,
    value: "Appartement",
  },
  {
    id: 3,
    value: "Chateau",
  },
  {
    id: 4,
    value: "Loft",
  },
];
const countries = [
  {
    id: 1,
    value: "France",
  },
  {
    id: 2,
    value: "Italie",
  },
  {
    id: 3,
    value: "Belgique",
  },
  {
    id: 4,
    value: "Espagne",
  },
];

const TextForm = ({ targetPage, errors }) => {
  const dispatch = useDispatch();
  const { houseFormDesc } = useSelector(state => state.houses);
  const {
    address, zipcode, city, title, rooms, bedrooms,
    surface, area, floor, description, type, country
  } = houseFormDesc;

  const target = 'textForm';

  const handleChangeType = (e) => {
    const type = types.filter(t => t.value === e.target.value);
    dispatch(setHouseFormDescType({ ...houseFormDesc, type: { id: type[0].id, type: e.target.value } }));
  };
  const handleChangeCountry = (e) => {
    const country = countries.filter(t => t.value === e.target.value);
    dispatch(setHouseFormDescCountry({ ...houseFormDesc, country: { id: country[0].id, country: e.target.value } }))
  };
  const handleChange = (e) => {
    const getName = e.target.getAttribute('name');
    dispatch(setHouseFormDesc({ ...houseFormDesc, [getName]: e.target.value }));
  };

  return (
    <section className={styles.desc}>
      {!targetPage && <ButtonClose custom={styles.button_close} target={target} />}
      {!targetPage && <ButtonValidation custom={styles.button_validation} target={target} />}
      <div className={styles.desc_detailed}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 0.5 },
          }}
          noValidate
          autoComplete="on"
        >
          <h4 className={styles.desc_detailed__title}>
            <TextField
              id="standard-title"
              label="Titre"
              value={title}
              name="title"
              onChange={handleChange}
              type="text"
              variant="standard"
            />
          </h4>
          <div className={styles.desc_detailed__info}>
            <div className={styles.desc_detailed__text}>
              <div className={styles.desc_detailed__text_left}>
                <TextField
                  id="standard-select-currency-native-type"
                  select
                  defaultValue={type.type}
                  label="Selectionner le type"
                  onChange={handleChangeType}
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  sx={{ width: "20ch" }}
                >
                  {types.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </TextField>
                {!errors.address && <TextField
                  required
                  id="standard-address"
                  label="Adresse"
                  value={address}
                  name="address"
                  onChange={handleChange}
                  type="text"
                  variant="standard"
                  sx={{ width: "20ch" }}
                />}
                {errors.address &&
                  <TextField
                    error
                    id="filled-error-helper-text-address"
                    label={errors.address}
                    value={address}
                    name="address"
                    onChange={handleChange}
                    variant="standard"
                    sx={{ width: "20ch" }}
                  />}
                {!errors.zipcode && <TextField
                  required
                  id="standard-zip-code"
                  label="Code postal"
                  type="text"
                  value={zipcode}
                  name="zipcode"
                  onChange={handleChange}
                  variant="standard"
                  sx={{ width: "15ch" }}
                />}
                {errors.zipcode &&
                  <TextField
                  error
                  id="filled-error-helper-text-zip-code"
                  label={errors.zipcode}
                  value={zipcode}
                  name="zipcode"
                  onChange={handleChange}
                  variant="standard"
                  sx={{ width: "15ch" }}
                  />}
                {!errors.city && <TextField
                  required
                  id="standard-city"
                  label="Ville"
                  type="text"
                  value={city}
                  name="city"
                  onChange={handleChange}
                  variant="standard"
                  sx={{ width: "20ch" }}
                />}
                {errors.city &&
                  <TextField
                  error
                  id="filled-error-helper-text-city"
                  label={errors.city}
                  value={city}
                  name="city"
                  onChange={handleChange}
                  variant="standard"
                  sx={{ width: "20ch" }}
                  />}
                <TextField
                  id="standard-select-currency-native-country"
                  select
                  label="Selectionner le pays"
                  defaultValue={country.country}
                  onChange={handleChangeCountry}
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  sx={{ width: "15ch" }}
                >
                  {countries.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="standard-number-pieces"
                  label="Nombres de chambres"
                  type="number"
                  value={rooms}
                  name="rooms"
                  onChange={handleChange}
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
                  label="Nombres de lits"
                  type="number"
                  value={bedrooms}
                  name="bedrooms"
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />{" "}
                <TextField
                  id="standard-number-surface"
                  label="Surface de la maison"
                  type="number"
                  value={surface}
                  name="surface"
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
                <TextField
                  id="standard-number-area"
                  label="Taille du terrain"
                  type="number"
                  value={area}
                  name="area"
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
                <TextField
                  id="standard-number-stage"
                  label="Nombre d'étage"
                  type="number"
                  value={floor}
                  name="floor"
                  onChange={handleChange}
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
                value={description}
                name="description"
                onChange={handleChange}
                rows={3}
                multiline
                variant="standard"
              />
            </div>
          </div>
        </Box>
      </div>
    </section>
  );
}

export default TextForm;
