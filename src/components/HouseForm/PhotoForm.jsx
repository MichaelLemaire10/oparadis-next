import React from "react";
import styles from "../../../styles/Form.module.css";
import { useSelector } from "react-redux";
import BigPhoto from "./PhotoForm/BigPhotoForm";
import LittlePhoto from "./PhotoForm/LittlePhotoForm";
import ButtonClose from "../Button/ButtonClose";
import ButtonValidation from "../Button/ButtonValidation";

const PhotoForm = () => {
  const { photosForm } = useSelector(state => state.houses);

  const mainPhoto = photosForm.find(p => p.main_photo === true);
  const littlePhotoOne = photosForm.find(p => p.target === 0);
  const littlePhotoTwo = photosForm.find(p => p.target === 1);
  const littlePhotoThree = photosForm.find(p => p.target === 2);
  const littlePhotoFour = photosForm.find(p => p.target === 3);

  return (
    <section className={styles.photos}>
      <ButtonClose custom={styles.button_close} target='photoForm' />
      <ButtonValidation custom={styles.button_validation} target='photoForm' />
      <BigPhoto 
        mainPhoto={mainPhoto && mainPhoto.photo ?
           {...mainPhoto, target: 4} : {target: 4}} 
      />
      <LittlePhoto 
      obj={littlePhotoOne && littlePhotoOne.photo ?
         {...littlePhotoOne, target: 0} : {target : 0}} 
      />
      <LittlePhoto 
      obj={littlePhotoTwo && littlePhotoTwo.photo ?
        {...littlePhotoTwo, target: 1} : {target : 1}} 
      />
      <LittlePhoto 
      obj={littlePhotoThree && littlePhotoThree.photo ?
        {...littlePhotoThree, target: 2} : {target : 2}} 
      />
      <LittlePhoto 
      obj={littlePhotoFour && littlePhotoFour.photo ?
        {...littlePhotoFour, target: 3} : {target : 3}} 
      />
    </section>
  );
}

export default PhotoForm;
