import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalSignin } from "../../reducers/booleans/slice";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import styles from "../../../styles/Header.module.css";
import {
  DialogTitle, DialogContent,
  DialogContentText, TextField, DialogActions, FormControl, InputLabel, Input, InputAdornment, IconButton
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { setSignin, setErrorsUser } from '../../reducers/users/slice';
import { validationSignin } from '../../selectors/validation';

const ModalSignin = () => {

  const dispatch = useDispatch();
  const { signin, errorsUser } = useSelector((state) => state.users );
  const { email, password } = signin; 
  const [showPwd, setShowPwd] = React.useState(false);

  // Selector //
  const openModalSignin = useSelector(state => state.booleans.modalSignin);

  // Handle //
  const handleOpenOrCloseForIn = () => { if (openModalSignin) dispatch(setOpenModalSignin(!openModalSignin)) };
  const handleChange = (e) => {
    const getName = e.target.getAttribute('name');
    dispatch(setSignin({ ...signin, [getName]: e.target.value }));
  };
  const handleClickShowPassword = () => setShowPwd(!showPwd);
  const handleMouseDownPassword = event => event.preventDefault();

  //Submit //
  const submitSignInForm = () => {
    dispatch(setErrorsUser(validationSignin(signin)));

    if(email != '' && password != '' && password.length >= 3) {
      console.log('connecter');
      handleOpenOrCloseForIn();
    };
  };
  
  return (
    <div>
      <Modal
        open={openModalSignin}
        onClose={handleOpenOrCloseForIn}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={styles.div_menu__modal}>
          <DialogTitle>Connexion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Veuillez renseigner vos informations de connexion :
            </DialogContentText>
            {!errorsUser.email && <TextField
              required
              autoFocus
              margin='dense'
              label='Entrez votre email'
              type='email'
              name='email'
              fullWidth
              variant='standard'
              value={email}
              onChange={handleChange}
            />}
            {errorsUser.email && <TextField
              error
              fullWidth
              id="filled-error-helper-text"
              label="Error"
              name="email"
              defaultValue={email}
              helperText={errorsUser.email}
              onChange={handleChange}
              variant="filled"
            />}
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Mot de passe
              </InputLabel>
              <Input
                required
                className={styles.input_pwd}
                id="standard-adornment-password"
                margin="dense"
                type={showPwd ? "text" : "password"}
                name='password'
                value={password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPwd ? <VisibilityOff name="showPassword" /> : <Visibility name="showPassword" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {errorsUser.password && <p className={styles.error}>{errorsUser.password}</p>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOpenOrCloseForIn}>Annuler</Button>
            <Button type='submit' onClick={submitSignInForm}>Envoyer</Button>
          </DialogActions>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalSignin;
