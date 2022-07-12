import React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import styles from "../../styles/Profil.module.css";
import TextForm from "../../src/components/Profil/TextForm";
import AvatarForm from "../../src/components/Profil/AvatarForm";
import PasswordForm from "../../src/components/Profil/PasswordForm";

const Profil = () => {
  //State form

  const submitTheFormCard = (e) => {
    console.log("valider carte", e.currentTarget);
    //check input errors before sending the form data
    // setErrors(validation(userObject));
    // prevent form validation if password under 3 characters
    // userObject.password.length && userObject.repeat_password.length < 3 ? dispatch(formError()) : dispatch(signUp());
  };
  const submitTheFormPwd = (e) => {
    console.log("valider Mot de passe", e.currentTarget);
    //check input errors before sending the form data
    // setErrors(validation(userObject));
    // prevent form validation if password under 3 characters
    // userObject.password.length && userObject.repeat_password.length < 3 ? dispatch(formError()) : dispatch(signUp());
  };

  return (
    <div className={styles.main}>
       
        <DialogContent className={styles.form}> 
        <DialogTitle>Mon profil</DialogTitle>
          <form className={styles.form_card}>
            <TextForm />
            <AvatarForm />
          </form>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={submitTheFormCard}
            >
              Envoyer
            </Button>
          </DialogActions>
          <form className={styles.form_allPassword}>
            <PasswordForm />
          </form>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={submitTheFormPwd}
            >
              Envoyer
            </Button>
          </DialogActions>
        </DialogContent>
    </div>
  );
};

export default Profil;
