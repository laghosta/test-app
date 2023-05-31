import React from 'react';
import styles from './styles.module.scss'
const Bio = () => {
    return (
        <section className={styles.bio}>
            <img className={styles.bio__img} src={window.innerWidth <= 375 ? "/images/Kate2.jpg" : "/images/Kate.jpg" } alt="Kate"/>
            <div className={styles.bio__info}>
                <h4 className={styles.bio__infoTitle}>
                    Екатерина Кузьмина
                </h4>
                 <p className={styles.bio__infoSubtitle}>
                     Основатель компании <strong>Spain House</strong>, эксперт по недвижимости</p>
                <p className={styles.bio__infoText}>
                    Планируете ли вы переехать в Марбелью или купить дом для отдыха, мы в 3SA Estate внесем решающий вклад, поставив ваши уникальные потребности в центр внимания.
                </p>
                <p className={styles.bio__infoLanguages}>
                    LanguageS: RUSSIAN, English, Spanish.
                </p>
                <a  className={styles.bio__btn} href="/">
                    контакты
                </a>
            </div>
        </section>
    );
};

export default Bio;