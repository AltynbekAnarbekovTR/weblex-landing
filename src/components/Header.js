import styles from "./Header.module.css";
import logoImg from "../assets/logo_welbex.png";
import telgramImg from "../assets/telegram.svg";
import phoneImg from "../assets/phone.svg";
import whatsappImg from "../assets/whatsapp.svg";

import useMediaQuery from "../hook/useMediaQuery";

const Header = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <header>
      <div className="container header-container">
        <div className={styles.header}>
          <div className={styles["header-left"]}>
            {" "}
            <div className={styles.logo}>
              <img src={logoImg} alt="logo" />
              <p className={styles["logo-text"]}>
                крупный интегратор CRM в Росcии и ещё 8 странах
              </p>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">Услуги</a>
                </li>
                <li>
                  <a href="#">Виджеты</a>
                </li>
                <li>
                  <a href="#">Интеграция</a>
                </li>
                <li>
                  <a href="#">Кейсы</a>
                </li>
                <li className={styles.certificates}>
                  <a href="#">Сертификаты</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles["header-right"]}>
            <div className={styles.contacts}>
              <div className={styles.number}>
                <a href="tel:+75555555555">+7 555 555-55-55</a>
              </div>
              <div className={styles.social}>
                <div className={styles.icon}>
                  <img src={telgramImg} alt="telegram-icon" />
                </div>
                <div className={styles.icon}>
                  <img src={phoneImg} alt="phone-icon" />
                </div>
                <div className={styles.icon}>
                  <img src={whatsappImg} alt="whatsapp-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
