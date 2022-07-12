import React from "react";
import styles from "../../../styles/Profil.module.css";
import { TextField } from "@material-ui/core";

const ProfilForm = () => {

  return (
    <div className={styles.form_info}>
      <TextField
        required
        margin="dense"
        id="firstname"
        label="Votre prénom"
        type="text"
        fullWidth
        variant="standard"
        name="firstname"
        // value={firstname}
        // onChange={handleSignUpInputChange}
      />
      {/* {errors.firstname && <p className='error'>{errors.firstname}</p>} */}
      <TextField
        required
        margin="dense"
        id="lastname"
        label="Votre nom"
        type="text"
        fullWidth
        variant="standard"
        name="lastname"
        // value={lastname}
        // onChange={handleSignUpInputChange}
      />
      {/* {errors.lastname && <p className='error'>{errors.lastname}</p>} */}

      <TextField
        margin="dense"
        id="pseudo"
        label="Votre Pseudo"
        type="text"
        fullWidth
        variant="standard"
        name="pseudo"
        // value={pseudo}
        // onChange={handleSignUpInputChange}
      />

      <TextField
        required
        margin="dense"
        id="phoneNumber"
        label="Votre numéro"
        type="text"
        fullWidth
        variant="standard"
        name="phoneNumber"
        // value={phoneNumber}
        // onChange={handleSignUpInputChange}
      />
      {/* {errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>} */}

      <TextField
        required
        margin="dense"
        id="email"
        label="Votre email"
        type="email"
        fullWidth
        variant="standard"
        name="email"
        // value={email}
        // onChange={handleSignUpInputChange}
      />
      {/* {errors.email && <p className='error'>{errors.email}</p>} */}

    </div>
  );
};

export default ProfilForm;
