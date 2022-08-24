import styles from '../../styles/Loading.module.css';

const Spinner = () => {
    return(
        <div className={styles.main}>
            <div className={styles.waterfall}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;