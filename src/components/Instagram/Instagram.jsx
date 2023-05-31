import React from 'react';
import styles from './styles.module.scss'
const Instagram = () => {
    return (
        <section className={styles.instagram}>
            <img  className={styles.instagram__logo} src="/images/instagram.png" alt=""/>
            <h4 className={styles.instagram__title}>Instagram</h4>
            <a className={styles.instagram__link} href="/">
                @realestate_spain_ekaterina
            </a>
            <div className={styles.instagram__items}>
                <img src="/images/image%201.jpg" alt="instagram image 1"/>
                <img src="/images/image%202.jpg" alt="instagram image 2"/>
                <img src="/images/image%203.jpg" alt="instagram image 3"/>
                <img src="/images/image%204.jpg" alt="instagram image 4"/>
                <img src="/images/image%205.jpg" alt="instagram image 5"/>
                <img src="/images/image%206.jpg" alt="instagram image 6"/>
                <img src="/images/image%207.jpg" alt="instagram image 7"/>
                <img src="/images/image%208.jpg" alt="instagram image 8"/>
                <img src="/images/image%209.jpg" alt="instagram image 9"/>
            </div>
            <a className={styles.instagram__btn} href="/">
                смотреть больше
            </a>
            <div className={styles.line}></div>
        </section>
    );
};

export default Instagram;