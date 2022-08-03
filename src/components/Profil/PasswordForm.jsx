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

  // State utiliser pour l'affichage du mot de passe et initialisé
  const [showPwd, setShowPwd] = React.useState({
    showPassword: false,
    showRepeatPassword: false,
    showOldPassword: false,
  });

  // Condition pour executer un requete differente a la base de donnée
  // if (target === 'modal') console.log('mettre une req vers reducer signup');

  // handle met à jour le state
  const handleChange = (e) => {
    const getName = e.target.getAttribute('name');
    target ? 
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
          className={styles.input_pwd}
          id="standard-adornment-password"
          margin="dense"
          type={showPwd.showPassword ? "text" : "password"}
          name="password"
          value={target ? formSignup.password : userFormPwd.password}
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
          id="standard-adornment-repeat-password"
          className={styles.input_pwd}
          margin="dense"
          type={showPwd.showRepeatPassword ? "text" : "password"}
          name="repeat_password"
          value={target ? formSignup.repeat_password : userFormPwd.repeat_password}
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
      {errors.repeat_password && <p className={styles.error}>{errors.repeat_password}</p>}

      {!target && (
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-old-password">
            Ancien mot de passe
          </InputLabel>
          <Input
            id="standard-adornment-old-password"
            className={styles.input_pwd}
            margin="dense"
            type={showPwd.showOldPassword ? "text" : "password"}
          name="old_password"
            value={userFormPwd.old_password}
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
      {errors.old_password && <p className={styles.error}>{errors.old_password}</p>}
    </form>
  );
};

export default PasswordForm;
