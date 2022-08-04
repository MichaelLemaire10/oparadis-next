import CloseIcon from '@mui/icons-material/Close';

const ButtonClose = ({ custom, target }) => {

    const handleClick = () => {
        switch (target) {
            case 'photoForm':
                console.log('case close photoForm');
                break;
            case 'boolForm':
                console.log('case close boolForm');
                break;
            case 'textForm':
                console.log('case close textForm');
                break;
            default:
                break;
        }
    };

    return (
        <CloseIcon
            className={custom.styles}
            onClick={handleClick}
            fontSize="medium"
            color="neutral"
        />
    );
};

export default ButtonClose;