import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ButtonUpdate = () => {
    return (
        <ModeEditIcon
        // className={custom.styles}
        onClick={handleDeleteHouse}
        fontSize="large"
        color="error"
    />
    );
};

export default ButtonUpdate;