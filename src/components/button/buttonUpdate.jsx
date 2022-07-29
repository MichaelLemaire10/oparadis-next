import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ButtonUpdate = ({ custom }) => {
    return (
        <ModeEditIcon
            className={custom.styles}
            // onClick={handleDeleteHouse}
            fontSize="large"
            color="secondary"
        />
    );
};

export default ButtonUpdate;