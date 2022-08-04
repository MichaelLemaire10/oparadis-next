import CheckIcon from '@mui/icons-material/Check';

const ButtonValidation = ({ custom, target }) => {

    const handleClick = () => {

        switch (target) {
            case 'photoForm':
                console.log('case check photoForm');
                break;
            case 'boolForm':
                console.log('case check boolForm');
                break;
            case 'textForm':
                console.log('case check textForm');
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