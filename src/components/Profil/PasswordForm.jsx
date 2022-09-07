import React from "react";
import styles from "../../../styles/Profil.module.css";
import {
  FormControl, IconButton, Input, InputAdornment, InputLabel,
} from "@material-ui/core";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setSignup, setProfilPwd } from "../../reducers/users/slice";

const PasswordForm = ({ target, errors, formSignup, userFormPwd }) => {
  const dispatch = useDispatch();

  // State utiliser pour l'affichage du mot de passe et l'initialisé
  const [showPwd, setShowPwd] = React.useState({
    showPassword: false,
    showRepeatPassword: false,
    showOldPassword: false,
  });

  // handle met à jour le state
  const handleChange = (e) => {
    const getName = e.target.getAttribute('name');
    target === 'modal'? 
    dispatch(setSignup({ ...formSignup, [getName]: e.target.value }))
    : 
    dispatch(setProfilPwd({ ...userFormPwd, [getName]: e.target.value }));
  };
  // affiche le mot de passe
  const handleClickShowPwd = (getName) => () => setShowPwd({ ...showPwd, [getName]: !showPwd[getName] });

  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <form className={styles.form_password}>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">
          Mot de passe
        </InputLabel>
        <Input
          error={errors.password}
          className={styles.input_pwd}
          id="standard-adornment-password"
          margin="dense"
          type={showPwd.showPassword ? "text" : "password"}
          name="password"
          value={target === 'modal'? formSignup.password : userFormPwd.password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPwd("showPassword")}
                onMouseDown={handleMouseDownPassword}
              >
                {showPwd.showPassword ? <VisibilityOff name="showPassword" /> : <Visibility name="showPassword" />}
              </IconButton>
            </InputAdornment>
          }

        />
      </FormControl>
      {errors.password && <p className={styles.error}>{errors.password}</p>}

      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-repeat-password">
          Vérifiez votre mot de passe
        </InputLabel>
        <Input
          error={errors.confirmationPassword}
          id="standard-adornment-repeat-password"
          className={styles.input_pwd}
          margin="dense"
          type={showPwd.showRepeatPassword ? "text" : "password"}
          name="confirmationPassword"
          value={target === 'modal' ? formSignup.confirmationPassword : userFormPwd.confirmationPassword}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle repeat_password visibility"
                onClick={handleClickShowPwd("showRepeatPassword")}
                onMouseDown={handleMouseDownPassword}
              >
                {showPwd.showRepeatPassword ? <VisibilityOff name="showRepeatPassword" /> : <Visibility name="showRepeatPassword" />}
              </IconButton>
            </InputAdornment>
          }

        />
      </FormControl>
      {errors.confirmationPassword && <p className={styles.error}>{errors.confirmationPassword}</p>}

      {target === 'profil' && (
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-old-password">
            Ancien mot de passe
          </InputLabel>
          <Input
            error={errors.oldPassword}
            id="standard-adornment-old-password"
            className={styles.input_pwd}
            margin="dense"
            type={showPwd.showOldPassword ? "text" : "password"}
          name="oldPassword"
            value={userFormPwd.oldPassword}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle old_password visibility"
                  onClick={handleClickShowPwd("showOldPassword")}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPwd.showOldPassword ? <VisibilityOff name="showOldPassword" /> : <Visibility name="showOldPassword" />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      )}
      {errors.oldPassword && <p className={styles.error}>{errors.oldPassword}</p>}
    </form>
  );
};

export default PasswordForm;
