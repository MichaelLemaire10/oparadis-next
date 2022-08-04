import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import {
    setShowFormBool,
    setShowFormText,
    setShowFormPhoto
} from '../../reducers/booleans/slice';

const ButtonValidation = ({ custom, target }) => {
    const dispatch = useDispatch();

    const handleClick = () => {

        switch (target) {
            case 'photoForm':
                dispatch(setShowFormPhoto(false));
                break;
            case 'textForm':
                dispatch(setShowFormText(false));
                break;
            case 'boolForm':
                dispatch(setShowFormBool(false));
                break;
            default:
                break;
        }
    };

    return (
        <CheckIcon
            className={custom.styles}
            onClick={handleClick}
            fontSize="medium"
            color="success"
        />
    );
};

export default ButtonValidation;
