import React from "react";
import {
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
import ButtonDelete from "../../src/components/Button/ButtonDelete";
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setErrorsUser, setProfilDesc } from "../../src/reducers/users/slice";
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
  
    //! A supprimer quand les ajax sera pret !//
  React.useEffect(() => { dispatch(setProfilDesc(user)) }, []);

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
    if (
      Object.entries(user).toString() === Object.entries(userFormDesc).toString()
    ) {
      console.log('Pas de changement');
    }
    else {
      // check input errors before sending the form data
      dispatch(setErrorsUser(validationProfilDesc(userFormDesc)));
      // Last check with condition
      if (
        userFormDesc.firstname && userFormDesc.lastname
        && userFormDesc.phone_number 
        && userFormDesc.email && !errorsUser.email
        && userFormDesc.description
        ) {
        dispatch(getUser(userFormDesc));
        console.log("envoyer desc");
      };
    }
  };

  const submitTheFormPwd = () => {
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
        <div className={styles.title}>
          <h2>
            Mon profil
          </h2>
          <ButtonDelete custom={styles.button_delete} />
        </div>
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
