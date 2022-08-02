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

const ModalSignin = () => {
  const dispatch = useDispatch();

  // state for password // 
  const [values, setValues] = React.useState({
    password: "", showPassword: false,
  });

  // Selector //
  const openModalSignin = useSelector(state => state.booleans.modalSignin);

  // Handle //
  const handleOpenOrCloseForIn = () => { if (openModalSignin) dispatch(setOpenModalSignin(!openModalSignin)) };
  const handleChange = (prop) => (event) => setValues({ ...values, [prop]: event.target.value });
  const handleClickShowPassword = () => setValues({ ...values, showPassword: !values.showPassword, });
  const handleMouseDownPassword = event => event.preventDefault();

  //Submit //
  const submitSignInForm = () => {
    // setErrors(validation(userObject));
    console.log('connecter');
    handleOpenOrCloseForIn();
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
            <TextField
              required
              autoFocus
              margin='dense'
              id='name'
              label='Entrez votre email'
              type='email'
              name='email'
              fullWidth
              variant='standard'
            // value={email}
            // onChange={handleSignInInputChange}
            />
            {/* {errors.email && <p className='error'>{errors.email}</p>} */}
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Mot de passe
              </InputLabel>
              <Input
                required
                className={styles.input_pwd}
                id="standard-adornment-password"
                margin="dense"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff name="showPassword" /> : <Visibility name="showPassword" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* {errors.password && <p className='error'>{errors.password}</p>} */}
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
