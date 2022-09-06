import DeleteIcon from '@mui/icons-material/Delete';
import { useSetLogoutMutation } from '../../services/auth';
import { useDeleteUserMutation } from '../../services/user';

const ButtonDelete = ({ custom, target }) => {
    const [deleteUserMutation] = useDeleteUserMutation();
    const [setLogoutMutation] = useSetLogoutMutation();

    const handleDelete = async () => {
        switch (target) {
            case 'profil':
                await deleteUserMutation();
                await setLogoutMutation();
                window.location.replace(process.env.NEXT_PUBLIC_HOME);
                break;

            case 'house':
                window.location.replace(process.env.NEXT_PUBLIC_HOME);
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