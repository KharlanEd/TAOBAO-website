import { useState } from "react";
import styles from "../styles/About.module.css";

export const About = () => {
  const [showDiv, setShowDiv] = useState(false);

  const onBtnClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <section className={styles.container}>
      <div className={styles.section}>
        {!showDiv ? (
          <button type="button" onClick={onBtnClick} className={styles.btn}>
            Детальніше про платформи
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 30.75L12 18.75L14.15 16.6L24 26.5L33.85 16.65L36 18.8L24 30.75Z"
                fill="#FFCACA"
              />
            </svg>
          </button>
        ) : (
          <div className={styles.section_btn}>
            <button type="button" onClick={onBtnClick} className={styles.btn}>
              Детальніше про платформи
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 30.75L12 18.75L14.15 16.6L24 26.5L33.85 16.65L36 18.8L24 30.75Z"
                  fill="#FFCACA"
                />
              </svg>
            </button>
            <ul className={styles.btn_list}>
              <li className={styles.btn_list__item}>
                <h3 className={styles.list_title__first}>Taobao</h3>
                <p className={styles.btn_list__text}>
                  Платформа розрахована на внутрішній ринок Китаю. Тому ціни тут
                  в 5 - 10 разів менше, ніж в Україні, навіть враховуючи платну
                  доставку. Знайти можна все: одяг, іграшки, взуття,
                  електроніку, все для машин, посуд і т.д.
                </p>
              </li>
              <li className={styles.btn_list__item}>
                <h3 className={styles.btn_list__title}>1688</h3>
                <p className={styles.btn_list__text}>
                  Це оптовий сайт і залежить він напряму від Таобао. Ціни тут
                  нижче, але купувати потрібно від 2-3х одиниць.
                </p>
              </li>
              <li>
                <h3 className={styles.btn_list__title}>Pinduoduo</h3>
                <p className={styles.btn_list__text}>
                  Торговий майданчик, який поки не такий популярний у нас, як
                  Таобао. Але саме тут можна знайти ті ж товари, навіть дешевше!
                  А також безліч недорогих реплік (від 100 грн).
                </p>
              </li>
            </ul>
          </div>
        )}
        <h2 className={styles.title}>Що входить у навчання ?</h2>
        <div className={styles.wrap}>
          <ul className={styles.wrapper}>
            <li className={styles.list}>
              <span className={styles.list_span}>01</span>
              Покрокові відеоуроки у записі
            </li>
            <li className={styles.list}>
              <span className={styles.list_span}>02</span>
              Текстовий формат у Telegram
            </li>
            <li className={styles.list}>
              <span className={styles.list_span}>03</span>
              Додатки, фішки, поради
            </li>
            <li className={styles.list}>
              <span className={styles.list_span}>04</span>
              Доступ до чату з учнями, де ділимося досвідом та ін.
            </li>
            <h2 className={styles.title_list}>Тариф зі зворотнім зв’язком</h2>
            <li className={styles.list}>
              <span className={styles.list_span}>05</span>
              Зворотній звʼязок зі мною без обмежень, якщо виникли питання /
              складності
            </li>
          </ul>
          <div>
            <h2 className={styles.title_list}>Бонуси</h2>
            <ul className={styles.list_wrap}>
              <li className={styles.wrap_text__margin}>
                6 різних перевізників <br /> (різна швидкість доставки, тарифи,
                перевезення копій і брендів без обмежень)
              </li>
              <li className={styles.wrap_text}>
                телеграм канал з посиланнями на перевірених продавців
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.desktop}>
          <h3 className={styles.title_text}>
            Ви ні до кого не привʼязуєтесь і проходите у своєму темпі! <br />
            Доступ залишається назавжди!
          </h3>
        </div>
      </div>
    </section>
  );
};
