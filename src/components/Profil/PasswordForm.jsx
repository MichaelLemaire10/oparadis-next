import React from "react";
import styles from "../../../styles/Profil.module.css";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setSignup } from "../../reducers/users/slice";

const Password = ({ target, errors, data }) => {
  const dispatch = useDispatch();
  const { password, repeat_password } = data;
  // State utiliser pour l'affichage du mot de passe et initialisé
  const [values, setValues] = React.useState({
    password: "",
    repeat_password: "",
    old_password: "",
    showPassword: false,
    showRepeatPassword: false,
    showOldPassword: false,
  });

  // Condition pour executer un requete differente a la base de donnée
  // if (target === 'modal') console.log('mettre une req vers reducer signup');

  // handle met à jour le state
  const handleChange = (prop) => (event) => {
    !target ? 
    setValues({ ...data, [prop]: event.target.value })
    : 
    dispatch(setSignup({ ...data, [prop]: event.target.value }));
  };
  // affiche le mot de passe
  const handleClickShowPwd = (getName) => () => setValues({ ...values, [getName]: !values[getName] });

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
          type={values.showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPwd("showPassword")}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff name="showPassword" /> : <Visibility name="showPassword" />}
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
          type={values.showRepeatPassword ? "text" : "password"}
          value={repeat_password}
          onChange={handleChange("repeat_password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle repeat_password visibility"
                onClick={handleClickShowPwd("showRepeatPassword")}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showRepeatPassword ? <VisibilityOff name="showRepeatPassword" /> : <Visibility name="showRepeatPassword" />}
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
            type={values.showOldPassword ? "text" : "password"}
            value={values.old_password}
            onChange={handleChange("old_password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle old_password visibility"
                  onClick={handleClickShowPwd("showOldPassword")}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showOldPassword ? <VisibilityOff name="showOldPassword" /> : <Visibility name="showOldPassword" />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      )}
    </form>
  );
};

export default Password;
