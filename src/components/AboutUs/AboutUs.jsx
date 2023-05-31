import React from 'react';
import styles from "./styles.module.scss"
const AboutUs = () => {
    return (
        <section className={styles.aboutUs}>
            <div className={styles.aboutUs__text}>
                <h4>
                    О нас
                </h4>
                <p className={styles.aboutUs__textParagraph}>
                    SPAIN HOUSE - ваш консультант по недвижимости на южном побережье
                    Испании. Наш 10-летний опыт дает нам
                    возможность устанавливать высокие
                    стандарты, добиваясь фантастических
                    результатов, работая большой
                    профессиональной командой, где
                    с первых дней работы основной
                    траекторией для развития стали
                    честность и абсолютное желание
                    помогать клиентам, улучшая их жизнь.
                    Обращаясь к нам, Вы можете быть
                    уверены, что получите лучший совет
                    и решение, с учетом всех Ваших
                    потребностей. Ведь приоритет и задача
                    для нас - найти дом Вашей мечты.
                </p>
                <h5>
                    будем рады помочь вам!
                </h5>
            </div>
            <img src="/images/aboutUsImg.png" alt="about Us"/>
        </section>
    );
};

export default AboutUs;