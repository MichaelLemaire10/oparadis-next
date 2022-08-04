import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ButtonUpdate = ({ custom, target }) => {

    const handleClick = () => {
        
        switch (target) {
            case 'photo':
                console.log('case photo');
                break;
            case 'text':
                console.log('case text');
                break;
            case 'bool':
                console.log('case bool');
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