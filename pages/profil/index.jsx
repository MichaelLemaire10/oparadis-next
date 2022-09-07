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
import Spinner from "../../src/components/Spinner";
import { useDispatch, useSelector } from 'react-redux';
import { getUser, resetPwd, setErrorsUser, setProfilDesc } from "../../src/reducers/users/slice";
import { validationProfilDesc, validationProfilPwd } from "../../src/selectors/validation";
import { useUpdatePwdMutation, useUpdateUserMutation } from "../../src/services/user";

const Profil = () => {
  const dispatch = useDispatch();

  // Ajax
  const [updateUserMutation, { isSuccess, data, 
    isLoading : IsLdgUser,
    error : errUser
  }] = useUpdateUserMutation();
  // console.log('error =>', errUser);
  const [updatePwdMutation, { 
    isLoading : isLdgPwd,
    isSuccess : successPwd,
    isError
  }] = useUpdatePwdMutation();
  
  // useSelector
  const {
    user,
    errorsUser,
    userFormPwd,
    userFormDesc,
  } = useSelector((state) => state.users);
  
  const target = 'profil';

  // New styles pour le bouton
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(139, 186, 249)",
        contrastText: "#ffffff",
      },
    },
  });

  // useEffect
  React.useEffect(() => {
    if (data) {
      dispatch(getUser(data));
      dispatch(setProfilDesc(data));
    };
  }, [isSuccess]);

  React.useEffect(() => {
    if (successPwd) {
      dispatch(resetPwd({
        password: "",
        confirmationPassword: "",
        oldPassword: "",
      }));
    };
  }, [successPwd]);

  // Submit
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
        // requete ajax
        updateUserMutation(userFormDesc);
      };
    }
  };

  const submitTheFormPwd = () => {
    //check input errors before sending the form data
    dispatch(setErrorsUser(validationProfilPwd(userFormPwd)));
    // prevent form validation if all password under 3 characters
    if (userFormPwd.password.length >= 3
      && userFormPwd.confirmationPassword.length >= 3
      && userFormPwd.oldPassword.length >= 3
    ) {
      //requete ajax
      updatePwdMutation(userFormPwd);
    };
  };

  return (
    <div className={styles.main}>
      <DialogContent className={styles.form}>
        <div className={styles.title}>
          <h2>
            Mon profil
          </h2>
          <ButtonDelete custom={styles.button_delete} target={target} />
        </div>
        <form className={styles.form_card}>
          {IsLdgUser && <Spinner />}
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
        {isError && <p className={styles.error}>Une erreur est survenu, merci de vérifier les données</p>}
        {isLdgPwd && <Spinner />}
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
