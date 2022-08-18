import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ConfirmMail.module.css';
import img1 from '../public/tomate-écrasé.png';
import img2 from '../public/tomate.png';

const ConfirmMail = () => {
    let error = false;

    return (
        <div className={styles.main}>
            {!error && (
                <div className={styles.error}>
                    <div >
                    <Image src={img2} width="250" height="250" alt='tomate' />
                    </div>
                    <div className={styles.msg_success}>
                        <p>Bienvenu chez les sans abris</p>
                        <p>vous etes bien connecter</p>
                        <p>vous pouvez squatter des logements</p>
                    </div>
                </div>
            )}
            {error && (
                <div className={styles.error}>
                    <div>
                        <Image src={img1} width="250" height="250" alt='tomate' />
                    </div>
                    <div className={styles.msg}>
                        <p className={styles.msg_error}>Une erreur est survenue !</p>
                        <Link href="/">
                            <a className={styles.link}>Retente ta chance</a>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConfirmMail;