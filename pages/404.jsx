import styles from '../styles/Error.module.css';
import Image from 'next/image';
import { noImgHouse } from '../src/selectors/img';

const ErrorPage = ({ error }) => {

    return (
        <div className={styles.main}>
            <Image
                className={styles.down}
                src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1661264461/nacdlytg1oeljafiru5p.jpg"
                width={600}
                height={500}
                alt='images error'
            />
            <div className={styles.up}>
                <div className={styles.number}>ERROR {error.status}</div>
                <div className={styles.type}>{error.data.error}</div>
                {/* <div className={styles.msg}>{error.data.message}</div> */}
            </div>
        </div>
    );
};

export default ErrorPage;