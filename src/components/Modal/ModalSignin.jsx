import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalSignin, setOpenModalSignup } from "../../reducers/booleans/slice";
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
import { useSetSigninMutation } from '../../services/auth';

const ModalSignin = () => {
  const dispatch = useDispatch();
  const [showPwd, setShowPwd] = React.useState(false);

  const [ setSignin, { isError, error, isSuccess, isLoading } ] = useSetSigninMutation();
  console.log('isLoading:', isLoading);
  console.log('isSuccess:', isSuccess);
  console.log('error:', error);
  console.log('isError:', isError);
  
  // Selector //
  const openModalSignin = useSelector(state => state.booleans.modalSignin);
  const openModalSignup = useSelector(state => state.booleans.modalSignup);
  const { signin, errorsUser } = useSelector((state) => state.users);
  const { email, password } = signin;

  // Handle //
  const handleOpenOrCloseForIn = () => { 
    if (openModalSignin) dispatch(setOpenModalSignin(!openModalSignin));
    if (openModalSignup) dispatch(setOpenModalSignup(false));
  };
  const handleChange = (e) => {
    const getName = e.target.getAttribute('name');
    dispatch(setSignin({ ...signin, [getName]: e.target.value }));
  };
  const handleClickShowPassword = () => setShowPwd(!showPwd);
  const handleMouseDownPassword = e => e.preventDefault();

  //Submit //
  const submitSignInForm = () => {
    dispatch(setErrorsUser(validationSignin(signin)));
    if (email != '' && /\S+@\S+\.\S+/.test(email) 
    && password != '' && password.length >= 3) {
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
              id="filled-error-helper-text-mail"
              label="Error"
              name="email"
              defaultValue={email}
              helperText={errorsUser.email}
              onChange={handleChange}
              variant="standard"
            />}
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Mot de passe
              </InputLabel>
              <Input
                error={errorsUser.password}
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
