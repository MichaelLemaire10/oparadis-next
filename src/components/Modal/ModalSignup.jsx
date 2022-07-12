import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import styles from "../../styles/Header.module.css";
import TextFormProfil from "../Profil/TextForm";
import { DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

export default function ModalSignup() {
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenOrClose = () => openModal ? setOpenModal(false) : setOpenModal(true);

  const submitTheForm = () => {
    console.log('valider');
    handleOpenOrClose();
    //check input errors before sending the form data
    // setErrors(validation(userObject));
    // prevent form validation if password under 3 characters
    // userObject.password.length && userObject.repeat_password.length < 3 ? dispatch(formError()) : dispatch(signUp());
  };

  return (
    <div>
      <Button onClick={handleOpenOrClose}>Inscription</Button>
      <Modal
        open={openModal}
        onClose={handleOpenOrClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={styles.div_menu__modal}>
        <DialogTitle>Inscription</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez renseigner les informations pour votre inscription :
          </DialogContentText>
          <form>
          <TextFormProfil />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenOrClose}>Annuler</Button>
          <Button type='submit' onClick={submitTheForm}>
            Envoyer
          </Button>
        </DialogActions>
        </Box>
      </Modal>
    </div>
  );
}
