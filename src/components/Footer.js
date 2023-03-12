import styles from "./Footer.module.css";
import telgramImg from "../assets/telegram.svg";
import phoneImg from "../assets/phone.svg";
import whatsappImg from "../assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.about}>
          <h4>О КОМПАНИИ</h4>
          <ul className={styles["footer-list"]}>
            <li>Партнёрская программа</li>
            <li>Вакансии</li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h4>МЕНЮ</h4>
          <ul className={`${styles["footer-list"]} ${styles["menu-list"]}`}>
            <li>Расчёт стоимости</li>
            <li>Кейсы</li>
            <li>Услуги</li>
            <li>Благодарственные письма</li>
            <li>Виджеты</li>
            <li>Сертификаты</li>
            <li>Интеграции</li>
            <li>Блог на Youtube</li>
            <li>Наши клиенты</li>
            <li>Вопрос / Ответ</li>
          </ul>
        </div>
        <div className={styles.contacts}>
          <h4>КОНТАКТЫ</h4>
          <div className={styles["footer-list"]}>
            <p className={styles.phone}>+7 555 555-55-55</p>
            <div className={styles.social}>
              <div className={styles.icon}>
                <img src={telgramImg} alt="telegram-icon" />
              </div>
              <div>
                <img src={phoneImg} alt="phone-icon" />
              </div>
              <div>
                <img src={whatsappImg} alt="whatsapp-icon" />
              </div>
            </div>
            <p className={styles.address}>Москва, Путевой проезд 3с1, к 902</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <p className={styles.underline}>Политика конфиденциальности</p>
      </div>
    </footer>
  );
};

export default Footer;
