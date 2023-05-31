import React from 'react';
import styles from './styles.module.scss'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img className={styles.logo} src="/images/logo2.png" alt="footer logo"/>
            <ul className={styles.socials}>
                <li className={styles.socials__instagram}>
                    <a href="/">
                        <img src="/images/instagram1.png" alt="instagram"/>
                    </a>
                </li>
                <li className={styles.socials__facebook}>
                    <a href="/">
                        <img src="/images/facebook.png" alt="facebook"/>
                    </a>
                </li>
            </ul>
            <p className={styles.text}>
                © Все права защищены. Агентство недвижимости Spain House
            </p>
        </footer>
    );
};

export default Footer;