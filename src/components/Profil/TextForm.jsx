import React from "react";
import styles from "../../../styles/Profil.module.css";
import { TextField } from "@material-ui/core";
import { setSignup, setProfilDesc } from "../../reducers/users/slice";
import { useDispatch } from "react-redux";

const TextForm = ({ errors, form, formSignup, target}) => {
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
        value={target ? formSignup.firstname : form.firstname}
        onChange={handleSignUpInputChange}
      />}
      {errors.firstname &&
        <TextField
          error
          fullWidth
          margin="dense"
          id="filled-error-helper-text-firstname"
          label={`Error: ${errors.firstname}`}
          value={target ? formSignup.firstname : form.firstname}
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
        value={target ? formSignup.lastname : form.lastname}
        onChange={handleSignUpInputChange}
      />}
      {errors.lastname && <TextField
        error
        fullWidth
        margin="dense"
        id="filled-error-helper-text-lastname"
        label={`Error: ${errors.lastname}`}
        name="lastname"
        value={target ? formSignup.lastname : form.lastname}
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
        value={target ? formSignup.pseudo : form.pseudo}
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
        value={target ? formSignup.phone_number : form.phone_number}
        onChange={handleSignUpInputChange}
      />}
      {errors.phone_number && <TextField
        error
        fullWidth
        margin="dense"
        id="filled-error-helper-text-phone"
        label={`Error: ${errors.phone_number}`}
        name="phone_number"
        value={target ? formSignup.phone_number : form.phone_number}
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
        value={target ? formSignup.email : form.email}
        onChange={handleSignUpInputChange}
      />}
      {errors.email && <TextField
        error
        fullWidth
        id="filled-error-helper-text-email"
        label={`Error: ${errors.email}`}
        margin="dense"
        name="email"
        value={target ? formSignup.email : form.email}
        onChange={handleSignUpInputChange}
        variant="filled"
      />}

    </div>
  );
};

export default TextForm;
