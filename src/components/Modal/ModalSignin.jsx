import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import styles from "../../styles/Header.module.css";
import { DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';

export default function ModalSignin() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenOrClose = () => openModal ? setOpenModal(false) : setOpenModal(true);


//   const [errors, setErrors] = React.useState({});

  const submitSignInForm = () => {
    // setErrors(validation(userObject));
    console.log('connecter');
    handleOpenOrClose();
  };
  return (
    <div>
      <Button onClick={handleOpenOrClose}>Connexion</Button>
      <Modal
        open={openModal}
        onClose={handleOpenOrClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={styles.div_menu__modal}>
        <DialogTitle>Connexion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez renseigner vos informations de connexion :
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin='dense'
            id='name'
            label='Entrez votre email'
            type='email'
            name='email'
            // error={!!inputError}
            // helperText={inputError ? errorMail : null}
            fullWidth
            variant='standard'
            // value={email}
            // onChange={handleSignInInputChange}
          />
          {/* {errors.email && <p className='error'>{errors.email}</p>} */}

          <TextField
            required
            margin='dense'
            id='password'
            label='Entrez votre mot de passe'
            type='password'
            name='password'
            // error={!!inputError}
            // helperText={inputError ? errorPassword : null}
            fullWidth
            variant='standard'
            // value={password}
            // onChange={handleSignInInputChange}
          />
          {/* {errors.password && <p className='error'>{errors.password}</p>} */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenOrClose}>Annuler</Button>
          <Button type='submit' onClick={submitSignInForm}>Envoyer</Button>
        </DialogActions>
        </Box>
      </Modal>
    </div>
  );
}
