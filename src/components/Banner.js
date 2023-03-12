import useMediaQuery from "../hook/useMediaQuery";
import styles from "./Banner.module.css";
import dashImg from "../assets/Dash.png";

const Banner = () => {
  const isAbove320 = useMediaQuery("(min-width: 601px)");
  return (
    <section>
      <div className="container">
        <div className={styles.banner}>
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
              {isAbove320 && (
                <div>
                  <h4>Виджеты</h4>
                  <p>30 готовых решений</p>
                </div>
              )}
              {!isAbove320 && (
                <p className={styles.present}>
                  <img src={dashImg} alt="" /> <p>SKYPE АУДИТ</p>
                </p>
              )}
              {isAbove320 && (
                <div>
                  <h4>DASHBOARD</h4>
                  <p>с показателями вашего бизнеса</p>
                </div>
              )}
              {!isAbove320 && (
                <p className={styles.present}>
                  <img src={dashImg} alt="" /> <p>30 виджетов</p>
                </p>
              )}
              {isAbove320 && (
                <div>
                  <h4>SKYPE АУДИТ</h4>
                  <p>отдела продаж и CRM системы</p>
                </div>
              )}
              {!isAbove320 && (
                <p className={styles.present}>
                  <img src={dashImg} alt="" /> <p>Dashboard</p>
                </p>
              )}
              {isAbove320 && (
                <div>
                  <h4>35 ДНЕЙ</h4>
                  <p>использования CRM</p>
                </div>
              )}
              {!isAbove320 && (
                <p className={styles.present}>
                  <img src={dashImg} alt="" /> <p>Месяц аmoCRM</p>
                </p>
              )}
            </div>
            <div className={styles["banner-btn"]}>
              {isAbove320 && <button>Получить консультацию</button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
