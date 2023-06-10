import React from 'react';
import styles from './styles.module.scss';

function Footer () {
    return(
        <footer className={styles.footerWrap}>
            <span className={styles.text}>Support</span> |
            <span className={styles.text}>Terms of Service</span> |
            <span className={styles.text}>Privacy Policy</span>
        </footer>
    )
}

export default Footer;
