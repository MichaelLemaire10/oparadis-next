import React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import styles from "../../styles/Profil.module.css";
import TextForm from "../../src/components/Profil/TextForm";
import AvatarForm from "../../src/components/Profil/AvatarForm";
import DescForm from "../../src/components/Profil/DescForm";
import PasswordForm from "../../src/components/Profil/PasswordForm";
import { useDispatch, useSelector } from 'react-redux';
import { setErrorsUser } from "../../src/reducers/users/slice";
import { validationProfilDesc } from "../../src/selectors/validation";

const Profil = () => {
  const dispatch = useDispatch();
  const {
    user,
    errorsUser,
    userFormPwd,
    userFormDesc,
  } = useSelector((state) => state.users);
  const target = '';

  // New styles pour le bouton
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(139, 186, 249)",
        contrastText: "#ffffff",
      },
    },
  });

  const submitTheFormCard = () => {
    // check input errors before sending the form data
    dispatch(setErrorsUser(validationProfilDesc(userFormDesc)));
    // prevent form validation if password under 3 characters
    if (!errorsUser.firstname && !errorsUser.lastname
      && !errorsUser.phone_number && !errorsUser.email
      && !errorsUser.description) {
      console.log("envoyer desc");
    };
  };

  const submitTheFormPwd = (e) => {
    console.log("valider Mot de passe", e.currentTarget);
    //check input errors before sending the form data
    // dispatch(setErrorsUser(validationProfilPwd(userObject)));
    // prevent form validation if password under 3 characters
    userObject.password.length && userObject.repeat_password.length < 3 ? dispatch(formError()) : dispatch(signUp());
  };


  return (
    <div className={styles.main}>

      <DialogContent className={styles.form}>
        <DialogTitle>Mon profil</DialogTitle>
        <form className={styles.form_card}>
          <TextForm
            data={user}
            form={userFormDesc}
            errors={errorsUser}
            target={target}
          />
          <AvatarForm
            data={user}
            form={userFormDesc}
          />
          <DescForm
            data={user}
            form={userFormDesc}
            errors={errorsUser}
          />
        </form>
        <DialogActions>
          <ThemeProvider theme={theme} >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={submitTheFormCard}
            >
              Envoyer
            </Button>
          </ThemeProvider>
        </DialogActions>
        <form className={styles.form_allPassword}>
          <PasswordForm 
            data={userFormPwd} 
            errors={errorsUser} 
            target={target}
          />
        </form>
        <DialogActions>
          <ThemeProvider theme={theme} >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={submitTheFormPwd}
            >
              Envoyer
            </Button>
          </ThemeProvider>
        </DialogActions>
      </DialogContent>
    </div>
  );
};

export default Profil;
