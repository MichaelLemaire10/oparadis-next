import DeleteIcon from '@mui/icons-material/Delete';

const ButtonDelete = ({ custom }) => {
    
    const handleDeleteHouse = () => {
        console.log("delete");
    };

    return (
        <DeleteIcon
            className={custom.styles}
            onClick={handleDeleteHouse}
            fontSize="large"
            color="error"
        />
    );
};

export default ButtonDelete;