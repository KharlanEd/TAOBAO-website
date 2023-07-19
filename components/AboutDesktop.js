import { useState } from "react";

import styles from "../styles/AboutDesktop.module.css";

export const AboutDesktop = () => {
  const [showModal, setShowModal] = useState(false);

  const onBtnClick = () => {
    setShowModal(!showModal);
  };

  return (
    <section>
      <div className={styles.section}>
        <h2 className={styles.title}>TAOBAO | 1688 | Pinduoduo | WeChat </h2>
        <p className={styles.text}>
          Запамʼятай ці 4 назви, якщо хочеш купувати речі{" "}
          <strong>
            в 5 <br /> разів дешевше
          </strong>{" "}
          або відкрити свій магазин
        </p>
        <p className={styles.text}>
          Мій курс вже пройшли 100+ учнів, та більшість вже відкрили <br /> свої
          магазини
        </p>
        <button type="button" onClick={onBtnClick} className={styles.btn}>
          Детальніше про платформи
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="w-9 h-9 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {showModal && (
          <ul className={styles.btn_list}>
            <li className={styles.btn_list__item}>
              <h3 className={styles.list_title__first}>Taobao</h3>
              <p className={styles.btn_list__text}>
                Платформа розрахована на внутрішній ринок Китаю. Тому ціни тут в
                5 - 10 разів менше, ніж в Україні, навіть враховуючи платну
                доставку. Знайти можна все: одяг, іграшки, взуття, електроніку,
                все для машин, посуд і т.д.
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
                Таобао. Але саме тут можна знайти ті ж товари, навіть дешевше! А
                також безліч недорогих реплік (від 100 грн).
              </p>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};
