import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { resetHouse } from '../../reducers/houses/slice';
import { resetUser } from '../../reducers/users/slice';
import { useSetLogoutMutation } from '../../services/auth';
import { useDeleteHouseMutation } from '../../services/house';
import { useDeleteUserMutation } from '../../services/user';

const ButtonDelete = ({ custom, target }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [deleteUserMutation] = useDeleteUserMutation();
    const [setLogoutMutation] = useSetLogoutMutation();
    const [deleteHouseMutation] = useDeleteHouseMutation();

    const { houseDesc } = useSelector(state => state.houses);

    const handleDelete = async () => {

        switch (target) {
            case 'profil':
                await deleteUserMutation();
                await setLogoutMutation();
                break;

            case 'house':
                await deleteHouseMutation(houseDesc.id);
                router.push('/');
                setTimeout(() => dispatch(resetHouse()), 1000);
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