import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { logOut, setLogged } from '../../reducers/auth/slice';
import { useDeleteUserMutation } from '../../services/user';

const ButtonDelete = ({ custom, target }) => {
    const dispatch = useDispatch();
    const [deleteMutation] = useDeleteUserMutation();

    const handleDelete = () => {
        switch (target) {
            case 'profil':
                deleteMutation();
                dispatch(logOut());
                dispatch(setLogged(false));
                window.location.replace("http://localhost:3000/");
                break;

            case 'house':
                window.location.replace("http://localhost:3000/");
                break;

            default:
                break;
        };
    };

    return (
        <DeleteIcon
            className={custom}
            onClick={handleDelete}
            fontSize="large"
            color="error"
        />
    );
};

export default ButtonDelete;