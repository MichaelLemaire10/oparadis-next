import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import { setShowFormBool, setShowFormText, setShowFormPhoto } from '../../reducers/booleans/slice';
import { 
    getHouseBool, getHouseDesc, setErrorsHouse, getHousePhoto 
} from '../../reducers/houses/slice';
import { validationHouse } from '../../selectors/validation';

const ButtonValidation = ({ custom, target, updateHouseBoolMutation }) => {
    const dispatch = useDispatch();
    const { 
        houseFormBool, houseFormDesc, photosForm,
         houseDesc, houseBool, photos 
        } = useSelector(state => state.houses);

    const handleClick = async () => {
        switch (target) {
            case 'photoForm':
                if (JSON.stringify(photos) === JSON.stringify(photosForm)) {
                    dispatch(setShowFormPhoto(false));
                } else {
                    const array = photosForm.filter(p => p.photo !== null);
                    dispatch(getHousePhoto(array));
                    dispatch(setShowFormPhoto(false));
                    console.log("envoyer photo");
                }
                break;
            case 'textForm':
                dispatch(setErrorsHouse(validationHouse(houseFormDesc)));
                // Last check with condition
                if (
                    Object.entries(houseDesc).toString() === Object.entries(houseFormDesc).toString()
                ) {
                    dispatch(setShowFormText(false));
                } else {
                    if (houseFormDesc.address && houseFormDesc.zipcode
                        && houseFormDesc.city) {
                        dispatch(getHouseDesc(houseFormDesc))
                        dispatch(setShowFormText(false));
                        console.log("envoyer desc");
                    };
                };

                break;
            case 'boolForm':
                if (
                    Object.entries(houseBool).toString() === Object.entries(houseFormBool).toString()
                ) {
                    dispatch(setShowFormBool(false));
                }
                else {
                    // await updateHouseBoolMutation(houseFormBool);
                };
                break;
            default:
                break;
        }
    };

    return (
        <CheckIcon
            className={custom}
            onClick={handleClick}
            fontSize="medium"
            color="success"
        />
    );
};

export default ButtonValidation;
