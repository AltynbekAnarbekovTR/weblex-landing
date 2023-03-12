import styles from "./Header.module.css";
import logoImg from "../assets/logo_welbex.png";
import telgramImg from "../assets/telegram.svg";
import phoneImg from "../assets/phone.svg";
import whatsappImg from "../assets/whatsapp.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logoImg} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>Услуги</li>
            <li>Виджеты</li>
            <li>Интеграция</li>
            <li>Кейсы</li>
            <li>Сертификаты</li>
          </ul>
        </nav>
        <div className={styles.contacts}>
          <div className={styles.number}>
            <span>+7 555 555-55-55</span>
          </div>
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
        </div>
      </div>
      <p className={styles["logo-text"]}>
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </header>
  );
};

export default Header;
