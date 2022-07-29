import { Button } from "@mui/material";
import React from "react";
import styles from "../../../styles/Form.module.css";
import BigPhoto from "./PhotoForm/BigPhoto";
import LittlePhoto from "./PhotoForm/LittlePhoto";
import { createTheme, ThemeProvider, DialogActions } from "@material-ui/core";

function PhotoForm() {

  // New styles pour le bouton
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(139, 186, 249)",
        contrastText: "#ffffff",
      },
    },
  });

  const submitFormPhoto = (e) => {
    e.preventDefault();
    console.log('envoie des photos');
  };

  return (
    <section className={styles.photos}>
      <BigPhoto />
      <LittlePhoto />
      <DialogActions>
        <ThemeProvider theme={theme}>
          <Button 
            className={`${styles.button_send} ${styles.button_send_photo}`}
            variant="contained"
            color="primary"
            type="submit"
            onClick={submitFormPhoto}
          >
            Envoyer
          </Button>
        </ThemeProvider>
      </DialogActions>
    </section>
  );
}

export default PhotoForm;
