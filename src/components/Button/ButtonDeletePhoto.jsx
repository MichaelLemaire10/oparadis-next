import styles from "../../../styles/Form.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { setHouseFormPhoto } from "../../../src/reducers/houses/slice";

const ButtonDeletePhoto = ({ bool, obj }) => {
    const dispatch = useDispatch();

    const handleClick = () => dispatch(setHouseFormPhoto(
        { ...obj, photo: null, main_photo: bool }
        ));

    return (
        <div className={styles.button_delete}>
          <DeleteIcon
            className={styles.button_delete}
            onClick={handleClick}
            fontSize="large"
            color="error"
          />
        </div>
    )
};

export default ButtonDeletePhoto;