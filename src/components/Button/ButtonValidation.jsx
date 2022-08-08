import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import { setShowFormBool, setShowFormText, setShowFormPhoto } from '../../reducers/booleans/slice';
import { getHouse, setErrorsHouse } from '../../reducers/houses/slice';
import { validationHouse
 } from '../../selectors/validation';

const ButtonValidation = ({ custom, target }) => {
    const dispatch = useDispatch();
    const { houseFormBool, houseFormDesc, house, errorsHouse } = useSelector(state => state.houses);

    const handleClick = () => {
        switch (target) {
            case 'photoForm':
                dispatch(setShowFormPhoto(false));
                break;
            case 'textForm':
                dispatch(setErrorsHouse(validationHouse(houseFormDesc)));
                // Last check with condition
                console.log('cpnt BtnValidation =>', errorsHouse)
                if (!errorsHouse.address && !errorsHouse.zipcode
                    && !errorsHouse.city) {
                    dispatch(setShowFormText(false));
                    console.log("envoyer desc");
                };
                break;
            case 'boolForm':
                dispatch(getHouse(
                    {
                        ...house,
                        internet: houseFormBool.internet,
                        washing_machine: houseFormBool.washing_machine,
                        TV: houseFormBool.TV,
                        hoven: houseFormBool.hoven,
                        microwaven: houseFormBool.microwaven,
                        dishwasher: houseFormBool.dishwasher,
                        bathub: houseFormBool.bathub,
                        shower: houseFormBool.shower,
                        parking: houseFormBool.parking
                    }
                ))
                dispatch(setShowFormBool(false));
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
