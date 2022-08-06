import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import {
    setShowFormBool,
    setShowFormText,
    setShowFormPhoto
} from '../../reducers/booleans/slice';

const ButtonClose = ({ custom, target }) => {
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
        <CloseIcon
            className={custom}
            onClick={handleClick}
            fontSize="medium"
            color="neutral"
        />
    );
};

export default ButtonClose;