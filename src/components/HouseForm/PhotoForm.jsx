import React from "react";
import styles from "../../../styles/Form.module.css";
import BigPhoto from "./PhotoForm/BigPhoto";
import LittlePhoto from "./PhotoForm/LittlePhoto";
import { ThemeProvider, Button } from "@material-ui/core";

function PhotoForm({ theme }) {

  const submitFormPhoto = (e) => {
    e.preventDefault();
    console.log('envoie des photos');
  };

  return (
    <section className={styles.photos}>
      <BigPhoto />
      <LittlePhoto />
        <ThemeProvider theme={theme}>
          <Button 
            variant="contained"
            color="primary"
            type="submit"
            onClick={submitFormPhoto}
          >
            Envoyer
          </Button>
        </ThemeProvider>
    </section>
  );
}

export default PhotoForm;
