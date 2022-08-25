import styles from '../styles/Error.module.css';
import Image from 'next/image';

const ErrorPage = () => {

    return (
        <div className={styles.main}>
            <Image
                className={styles.down}
                src="https://res.cloudinary.com/dhwbw94lc/image/upload/v1661264461/nacdlytg1oeljafiru5p.jpg"
                width={1200}
                height={800}
                alt='images error'
            />
            <div className={styles.up}>
                <div className={styles.number}>ERROR 404</div>
                <div className={styles.type}>Not found</div>
            </div>
        </div>
    );
};

export default ErrorPage;