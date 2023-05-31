import React from 'react';
import styles from './styles.module.scss'
import ItemInfo from './ItemInfo'
const RecommendedObjects = () => {
    return (
        <section className={styles.recommendedObj}>
            <h2>
                Рекомендуемые объекты
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
                congue ligula in rutrum. Morbi ne lacus condimentum, hendrerit mi eu,
            </p>
            <div className={styles.recommendedObj__items}>
                <div className={`${styles.item} ${styles.item1}`}>
                    <img  className={styles.item__img} src="/images/recommended1.jpg" alt="recommended item 1"/>
                    <ItemInfo/>
                </div>
                <div className={`${styles.item} ${styles.item2}`}>
                    <img className={styles.item__img} src="/images/recommended2.jpg" alt="recommended item 1"/>
                    <ItemInfo/>
                </div>
                <div className={`${styles.item} ${styles.item3}`}>
                    <img  className={styles.item__img} src="/images/recommended3.jpg" alt="recommended item 1"/>
                    <ItemInfo/>
                </div>
                <div className={`${styles.item} ${styles.item4}`}>
                    <img className={styles.item__img} src="/images/recommended4.png" alt="recommended item 1"/>
                    <ItemInfo/>
                </div>
            </div>
            <a className={styles.recommendedObj__btn} href="/">
                весь каталог
            </a>
            <div className={styles.line}>

            </div>
        </section>
    );
};

export default RecommendedObjects;