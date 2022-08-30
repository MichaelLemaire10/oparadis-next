import * as React from 'react';
import styles from "../../../styles/Header.module.css";
import { useDispatch, useSelector } from 'react-redux';
import TextFormProfil from "../Profil/TextForm";
import PasswordFormProfil from '../Profil/PasswordForm';
import Spinner from '../spinner';
import { setOpenModalSignup, setOpenModalSignin } from "../../reducers/booleans/slice";
import {
  Box, DialogContent, DialogTitle, Modal,
  DialogContentText, DialogActions, Button
} from '@material-ui/core';
import { setErrorsUser, setSignin } from '../../reducers/users/slice';
import { validationSignup } from '../../selectors/validation';
import { useSetSignupMutation } from '../../services/auth';

const ModalSignup = () => {
  const dispatch = useDispatch();
  const target = 'modal';

  const [setSignupMutation, { isLoading, isSuccess, error, isError }] = useSetSignupMutation();
  
  // Selector //
  const { signup, errorsUser } = useSelector((state) => state.users);
  const openModalSignup = useSelector((state) => state.booleans.modalSignup);
  
  const { password, repeat_password, firstname, lastname, email, phone_number } = signup;
  
  // useEffect //
  React.useEffect(() => {
    if (error && error.status === 403 && error.data.message === "Credentials already in use") {
      dispatch(setErrorsUser(validationSignup({ ...signup, email: 403 })));
    };
  }, [dispatch, error, isError, signup]);
  
  React.useEffect(() => {
    if (isSuccess) {
      dispatch(setSignin({ email, password }));
        dispatch(setOpenModalSignin(true));
      };
    }, [dispatch, email, isSuccess, password]);
    
    // Handle //
    const handleOpenOrCloseForUp = () => { if (openModalSignup) dispatch(setOpenModalSignup(!openModalSignup)) };
    
    // Submit //
    const submitTheForm = () => {
      //check input errors before sending the form data
      dispatch(setErrorsUser(validationSignup(signup)));
      // prevent form validation if password under 3 characters
      if (
        firstname && lastname && email && /\S+@\S+\.\S+/.test(email) && phone_number
        && password.length >= 3 && repeat_password === password
        ) {
          setSignupMutation(signup);
        };
      };

      return (
        <div>
      <Modal
        open={openModalSignup}
        onClose={handleOpenOrCloseForUp}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={styles.div_menu__modal}>
          {isLoading && <Spinner />}
          <DialogTitle>Inscription</DialogTitle>
          <DialogContent>
            <DialogContentText className={styles.padding}>
              Veuillez renseigner les informations pour votre inscription :
            </DialogContentText>
            <form className={styles.form_modal}>
              <TextFormProfil
                errors={errorsUser}
                formSignup={signup}
                target={target}
              />
              <PasswordFormProfil
                errors={errorsUser}
                formSignup={signup}
                target={target}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOpenOrCloseForUp}>Annuler</Button>
            <Button type="submit" onClick={submitTheForm}>
              Envoyer
            </Button>
          </DialogActions>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalSignup;
