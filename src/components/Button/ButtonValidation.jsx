import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import { setShowFormBool, setShowFormText, setShowFormPhoto } from '../../reducers/booleans/slice';
import { getHouseBool, getHouseDesc, setErrorsHouse } from '../../reducers/houses/slice';
import { validationHouse } from '../../selectors/validation';

const ButtonValidation = ({ custom, target }) => {
    const dispatch = useDispatch();
    const { houseFormBool, houseFormDesc, houseDesc, houseBool } = useSelector(state => state.houses);

    const handleClick = () => {
        switch (target) {
            case 'photoForm':
                dispatch(setShowFormPhoto(false));
                break;
            case 'textForm':
                dispatch(setErrorsHouse(validationHouse(houseFormDesc)));
                // Last check with condition
                if (
                    Object.entries(houseDesc).toString() === Object.entries(houseFormDesc).toString()
                ) {
                    console.log("Pas de changement");
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
                    console.log("Pas de changement");
                    dispatch(setShowFormBool(false));
                }
                else {
                    dispatch(getHouseBool(houseFormBool));
                    dispatch(setShowFormBool(false));
                    console.log('envoyer Bool');
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
