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
import { validationProfilDesc, validationProfilPwd } from "../../src/selectors/validation";

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
    if (!userFormDesc.firstname && !userFormDesc.lastname
      && !userFormDesc.phone_number && !userFormDesc.email
      && !userFormDesc.description) {
      console.log('Pas de changement');
    }
    else {
      // check input errors before sending the form data
      dispatch(setErrorsUser(validationProfilDesc(userFormDesc)));
      // Last check with condition
      if (!errorsUser.firstname && !errorsUser.lastname
        && !errorsUser.phone_number && !errorsUser.email
        && !errorsUser.description) {
        console.log("envoyer desc");
      };
    }
  };

  const submitTheFormPwd = (e) => {
    //check input errors before sending the form data
    dispatch(setErrorsUser(validationProfilPwd(userFormPwd)));
    // prevent form validation if all password under 3 characters
    if (userFormPwd.password.length >= 3
      && userFormPwd.repeat_password.length >= 3
      && userFormPwd.old_password.length >= 3
    ) {
      console.log('envoyer pwd');
    };
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
            userFormPwd={userFormPwd}
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
