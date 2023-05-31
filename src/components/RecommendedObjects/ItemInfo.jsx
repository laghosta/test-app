import React from 'react';
import styles from "./styles.module.scss"
const ItemInfo = () => {
    return (
        <div className={styles.item__info}>
                <p>
                    Fuengirola - R3304693
                </p>
                <h4>
                    Элитная вилла в стиле модерн
                </h4>
                <div className={styles.item__infoPrice}>
                    €4,195,000
                    <img src="/images/doubleTopArrow.png" alt="price"/>
                </div>
                <div className={styles.item__infoData}>
                    <p>Площадь: 300 м2</p>
                    <p>Спальни: 5</p>
                    <p>Терраса: 25м2</p>
                </div>
        </div>
    );
};

export default ItemInfo;