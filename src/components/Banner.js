import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <h1>
          Зарабатывайте больше <span>с WELBEX</span>
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={styles.right}>
        <h3>
          Вместе с 
          <span>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:
        </h3>
        <div className={styles.presents}>
          <div>
            <h4>Виджеты</h4>
            <p>30 готовых решений</p>
          </div>
          <div>
            <h4>DASHBOARD</h4>
            <p>с показателями вашего бизнеса</p>
          </div>
          <div>
            <h4>SKYPE АУДИТ</h4>
            <p>отдела продаж и CRM системы</p>
          </div>
          <div>
            <h4>35 ДНЕЙ</h4>
            <p>использования CRM</p>
          </div>
        </div>
        <div className={styles["banner-btn"]}>
          <button>Получить консультацию</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
