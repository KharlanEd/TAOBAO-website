import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../styles/Services.module.css";

export const servicesList = [
  {
    id: 1,
    title: "Pinduoduo",
    price: 999,
    priceithFeedback: 1300,
    currency: "грн",
  },
  {
    id: 2,
    title: "TAOBAO + 1688",
    price: 1100,
    priceithFeedback: 1600,
    currency: "грн",
  },
  {
    id: 3,
    title: "TAOBAO + 1688 + pinduoduo",
    price: 1499,
    priceithFeedback: 2100,
    currency: "грн",
  },
];
// export const ServicesSection = ({servicesList}) => {
//   if (!servicesList) {
//     return null;
//   }

export const ServicesSection = () => {
  return (
    <section className={styles.serviceContainer}>
      <h2 className={styles.serviceTitle}>TAOBAO /1688/ Pinduoduo/ WeChat</h2>
      <p className={styles.serviceSloganWrap}>
        <strong className={styles.serviceSlogan}>
          Запамʼятай ці 4 назви, якщо хочеш купувати речі в 5 разів дешевше або
          відкрити свій магазин
        </strong>
      </p>
      <p className={styles.serviceInfo}>
        Мій курс вже пройшли 30+ учнів та деякі вже відкрили свої магазини
      </p>
      <p>
        <strong className={styles.serviceSecondSlogan}>
          Почни свій шлях і ти
        </strong>
      </p>
      <p className={styles.serviceSloganWrap}>
        <strong className={styles.serviceSecondSlogan}>
          Давай заощаджувати разом!
        </strong>
      </p>

      <Swiper
        className={styles.servicesSliderWrap}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={2}
        centeredSlides
        centeredSlidesBounds
        initialSlide={1}
        pagination={{
          clickable: true,
        }}
      >
        {servicesList &&
          servicesList.map(({id, title, price, priceithFeedback, currency}) => (
            <SwiperSlide key={id} className={styles.servicesSliderSlide}>
              <div className={styles.servicesliderSlideInner}>
                <div className={styles.servicesliderSlideTitleBox}>
                  <h3 className={styles.servicesliderSlideTitle}>{title}</h3>
                </div>

                <ul className={styles.serviceCardSliderPriceWrap}>
                  <li>
                    <p className={styles.serviceCardSliderDescr}>
                      самостійне проходження
                    </p>
                    <p
                      className={styles.serviceCardSliderPrice}
                    >{`${price} ${currency}`}</p>
                  </li>
                  <li>
                    <p className={styles.serviceCardSliderDescr}>
                      Зі зворотнім зв’язком
                    </p>
                    <p
                      className={styles.serviceCardSliderPrice}
                    >{`${priceithFeedback} ${currency}`}</p>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <a
        href="https://t.me/Maria_09_07"
        target="_blank"
        rel="noopener"
        className={styles.servicesBtnBuy}
      >
        Купити
      </a>
    </section>
  );
};
