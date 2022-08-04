import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useDispatch } from 'react-redux';
import { 
    setShowFormBool, 
    setShowFormText,
    setShowFormPhoto
} from '../../reducers/booleans/slice';

const ButtonUpdate = ({ custom, target }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        
        switch (target) {
            case 'photo':
                dispatch(setShowFormPhoto(true));
                break;
            case 'text':
                dispatch(setShowFormText(true));
                break;
            case 'bool':
                dispatch(setShowFormBool(true));
                break;
            default:
                break;
        }
    };

    return (
        <ModeEditIcon
            className={custom.styles}
            onClick={handleClick}
            fontSize="medium"
            color="primary"
        />
    );
};

export default ButtonUpdate;