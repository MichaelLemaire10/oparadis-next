import React from "react";
import styles from "../../../styles/Profil.module.css";
import { TextField } from "@material-ui/core";
import { setSignup } from "../../reducers/users/slice";
import { useDispatch } from "react-redux";

const ProfilForm = ({ errors, data }) => {

  const dispatch = useDispatch();
  const { firstname, lastname, pseudo, phone_number, email } = data;

  const handleSignUpInputChange = (e) => {
    const getName = e.target.getAttribute('name');
    const objectToPass = {
      ...data,
      [getName]: e.target.value,
    };
    dispatch(setSignup(objectToPass));
  }

  return (
    <div className={styles.form_info}>

      {!errors.firstname && <TextField
        required
        fullWidth
        margin="dense"
        label="Votre prénom"
        type="text"
        variant="standard"
        name="firstname"
        value={firstname}
        onChange={handleSignUpInputChange}
      />}
      {errors.firstname &&
        <TextField
          error
          fullWidth
          id="filled-error-helper-text"
          label="Error"
          defaultValue={firstname}
          helperText={errors.firstname}
          name="firstname"
          onChange={handleSignUpInputChange}
          variant="filled"
        />}

      {!errors.lastname && <TextField
        required
        fullWidth
        margin="dense"
        label="Votre nom"
        type="text"
        variant="standard"
        name="lastname"
        value={lastname}
        onChange={handleSignUpInputChange}
      />}
      {errors.lastname && <TextField
        error
        fullWidth
        id="filled-error-helper-text"
        label="Error"
        name="lastname"
        defaultValue={lastname}
        helperText={errors.lastname}
        onChange={handleSignUpInputChange}
        variant="filled"
      />}

      <TextField
        fullWidth
        margin="dense"
        label="Votre Pseudo"
        type="text"
        variant="standard"
        name="pseudo"
        value={pseudo}
        onChange={handleSignUpInputChange}
      />

      {!errors.phone_number && <TextField
        required
        fullWidth
        margin="dense"
        label="Votre numéro"
        type="text"
        variant="standard"
        name="phone_number"
        value={phone_number}
        onChange={handleSignUpInputChange}
      />}
      {errors.phone_number && <TextField
        error
        fullWidth
        id="filled-error-helper-text"
        label="Error"
        name="phone_number"
        defaultValue={phone_number}
        helperText={errors.phone_number}
        onChange={handleSignUpInputChange}
        variant="filled"
      />}

      {!errors.email && <TextField
        required
        fullWidth
        margin="dense"
        label="Votre email"
        type="email"
        variant="standard"
        name="email"
        value={email}
        onChange={handleSignUpInputChange}
      />}
      {errors.email && <TextField
        error
        fullWidth
        id="filled-error-helper-text"
        label="Error"
        name="email"
        defaultValue={email}
        helperText={errors.email}
        onChange={handleSignUpInputChange}
        variant="filled"
      />}

    </div>
  );
};

export default ProfilForm;
