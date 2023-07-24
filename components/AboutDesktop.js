import { useState } from "react";
import Image from "next/image";

import styles from "../styles/AboutDesktop.module.css";

export const AboutDesktop = () => {
  const [showModal, setShowModal] = useState(false);

  const onBtnClick = () => {
    setShowModal(!showModal);
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <h2 className={styles.title}>TAOBAO | 1688 | Pinduoduo | WeChat </h2>
          <p className={styles.text}>
            Запамʼятай ці 4 назви, якщо хочеш купувати речі{" "}
            <strong>
              в 5 <br /> разів дешевше
            </strong>{" "}
            або відкрити свій магазин
          </p>
          <p className={styles.text}>
            Мій курс вже пройшли 100+ учнів, та більшість вже відкрили <br />{" "}
            свої магазини
          </p>
          {!showModal ? (
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
                  fill="#FFFFFF"
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
                    fill="#FFFFFF"
                  />
                </svg>
              </button>
              <ul className={styles.btn_list}>
                <li className={styles.btn_list__item}>
                  <h3 className={styles.list_title__first}>Taobao</h3>
                  <p className={styles.btn_list__text}>
                    Платформа розрахована на внутрішній ринок Китаю. Тому ціни
                    тут в 5 - 10 разів менше, ніж в Україні, навіть враховуючи
                    платну доставку. Знайти можна все: одяг, іграшки, взуття,
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
                    Таобао. Але саме тут можна знайти ті ж товари, навіть
                    дешевше! А також безліч недорогих реплік (від 100 грн).
                  </p>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.wrapper}>
          <div className={styles.img_taobao}>
            <Image src="/taobao.svg" alt="taobao" width={132} height={132} />
          </div>
          <div className={styles.img_1688}>
            <Image src="/1688.svg" alt="1688" width={124} height={124} />
          </div>
          <div className={styles.img_pinduoduo}>
            <Image
              src="/pinduoduo.svg"
              alt="pinduoduo"
              width={124}
              height={113}
            />
          </div>
          <div className={styles.img_wechat}>
            <Image src="/wechat.svg" alt="wechat" width={104} height={104} />
          </div>
        </div>
      </div>
    </section>
  );
};
