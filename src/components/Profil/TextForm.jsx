import React from "react";
import styles from "../../../styles/Profil.module.css";
import { TextField } from "@material-ui/core";
import { setSignup, setProfilDesc } from "../../reducers/users/slice";
import { useDispatch } from "react-redux";

const TextForm = ({ errors, data, form, formSignup, target}) => {
  const dispatch = useDispatch();

  const handleSignUpInputChange = (e) => {
    const getName = e.target.getAttribute('name');
    target ? 
    dispatch(setSignup({ ...formSignup, [getName]: e.target.value }))
    :
    dispatch(setProfilDesc({ ...form, [getName]: e.target.value }))
  };

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
        defaultValue={target ? formSignup.firstname : data.firstname}
        value={target ? formSignup.firstname : form.firstname}
        onChange={handleSignUpInputChange}
      />}
      {errors.firstname &&
        <TextField
          error
          fullWidth
          id="filled-error-helper-text"
          label="Error"
          value={target ? formSignup.firstname : form.firstname}
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
        defaultValue={target ? formSignup.lastname : data.lastname}
        value={target ? formSignup.lastname : form.lastname}
        onChange={handleSignUpInputChange}
      />}
      {errors.lastname && <TextField
        error
        fullWidth
        id="filled-error-helper-text"
        label="Error"
        name="lastname"
        value={target ? formSignup.lastname : form.lastname}
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
        value={target ? formSignup.pseudo : data.pseudo}
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
        defaultValue={target ? formSignup.phone_number : data.phone_number}
        value={target ? formSignup.phone_number : form.phone_number}
        onChange={handleSignUpInputChange}
      />}
      {errors.phone_number && <TextField
        error
        fullWidth
        id="filled-error-helper-text"
        label="Error"
        name="phone_number"
        value={target ? formSignup.phone_number : form.phone_number}
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
        defaultValue={target ? formSignup.email : data.email}
        value={target ? formSignup.email : form.email}
        onChange={handleSignUpInputChange}
      />}
      {errors.email && <TextField
        error
        fullWidth
        id="filled-error-helper-text"
        label="Error"
        name="email"
        value={target ? formSignup.email : form.email}
        helperText={errors.email}
        onChange={handleSignUpInputChange}
        variant="filled"
      />}

    </div>
  );
};

export default TextForm;
