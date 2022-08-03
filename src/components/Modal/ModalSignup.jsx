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
import { setErrorsUser } from '../../reducers/users/slice';
import { validationSignup } from '../../selectors/validation';

const ModalSignup = () => {
  const dispatch = useDispatch();
  const { signup, errorsUser } = useSelector((state) => state.users);
  const { password, repeat_password } = signup;
  const target = 'modal';

  // Selector //
  const openModalSignup = useSelector((state) => state.booleans.modalSignup)

  // Handle //
  const handleOpenOrCloseForUp = () => { if (openModalSignup) dispatch(setOpenModalSignup(!openModalSignup)) };

  // Submit //
  const submitTheForm = () => {
    //check input errors before sending the form data
    dispatch(setErrorsUser(validationSignup(signup)));
    // prevent form validation if password under 3 characters
    if (password.length >= 3 && repeat_password === password) {
      handleOpenOrCloseForUp();
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
          <DialogTitle>Inscription</DialogTitle>
          <DialogContent>
            <DialogContentText className={styles.padding}>
              Veuillez renseigner les informations pour votre inscription
              :
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
