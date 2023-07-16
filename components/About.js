import { useState } from "react";
import styles from "../styles/About.module.css";

export const About = () => {
  const [showDiv, setShowDiv] = useState(false);

  const onBtnClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {!showDiv ? (
          <button type="button" onClick={onBtnClick} className={styles.btn}>
            Детальніше про платформи
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-6 h-6 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        ) : (
          <div className={styles.section_btn}>
            <button type="button" onClick={onBtnClick} className={styles.btn}>
              Детальніше про платформи
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-6 h-6 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
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
        <ul>
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
          <li className={styles.list}>
            <span className={styles.list_span}>05</span>
            6 різних перевізників (різна швидкість доставки, тарифи, перевезення
            копій і брендів без обмежень)
          </li>
          <h2 className={styles.title}>Тариф зі зворотнім зв’язком</h2>
          <li className={styles.list}>
            <span className={styles.list_span}>06</span>
            Зворотній звʼязок зі мною без обмежень, якщо виникли питання /
            складності
          </li>
        </ul>
        <h2 className={styles.title}>Бонуси</h2>
        <div className={styles.wrap}>
          <p className={styles.wrap_text__margin}>
            урок з сайтом оригінальної корейської косметики ,якого немає в вільному доступі
          </p>
          <p className={styles.wrap_text}>
            телеграм канал з посиланнями на перевірених продавців
          </p>
        </div>
        <h3 className={styles.title_text}>
          Ви ні до кого не привʼязуєтесь і проходите у своєму темпі! <br />
          Доступ залишається назавжди!
        </h3>
      </div>
    </section>
  );
};
