import * as React from 'react';
import styles from "../../../styles/Header.module.css";
import TextFormProfil from "../Profil/TextForm";
import PasswordFormProfil from '../Profil/PasswordForm';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModalSignup } from "../../reducers/booleans/slice";
import {
  Box, DialogContent, DialogTitle, Modal,
  DialogContentText, DialogActions, Button
} from '@material-ui/core';

export default function ModalSignup() {
  const dispatch = useDispatch();
  const target = 'modal';

  // Selector //
  const openModalSignup = useSelector((state) => state.booleans.modalSignup)

  // Handle //
  const handleOpenOrCloseForUp = () => { if (openModalSignup) dispatch(setOpenModalSignup(!openModalSignup)) };

  // Submit //
  const submitTheForm = () => {
    console.log('valider');
    handleOpenOrCloseForUp();
    //check input errors before sending the form data
    // setErrors(validation(userObject));
    // prevent form validation if password under 3 characters
    // userObject.password.length && userObject.repeat_password.length < 3 ? dispatch(formError()) : dispatch(signUp());
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
          <DialogTitle>Inscription</DialogTitle>
          <DialogContent>
            <DialogContentText className={styles.padding}>
              Veuillez renseigner les informations pour votre inscription
              :
            </DialogContentText>
            <form className={styles.form_modal}>
              <TextFormProfil />
              <PasswordFormProfil target={target} />
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
}
