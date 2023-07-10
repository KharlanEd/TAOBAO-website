import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../styles/Services.module.css";

const servicesList = [
  {
    title: "Pinduoduo",
    price: 999,
    priceithFeedback: 1300,
    currency: "грн",
  },
  {
    title: "TAOBAO + 1688",
    price: 1100,
    priceithFeedback: 1600,
    currency: "грн",
  },
  {
    title: "TAOBAO + 1688 + pinduoduo",
    price: 1499,
    priceithFeedback: 2100,
    currency: "грн",
  },
];

export const ServicesSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>TAOBAO/1688/Pinduoduo/ WeChat</h2>
      <p className={styles.sectionSloganWrap}>
        <strong className={styles.sectionSlogan}>
          Запамʼятай ці 4 назви, якщо хочеш купувати речі в 5 разів дешевше або
          відкрити свій магазин
        </strong>
      </p>
      <p className={styles.sectionInfo}>
        Мій курс вже пройшли 30+ учнів та деякі вже відкрили свої магазини
      </p>
      <p className={styles.sectionSloganWrap}>
        <strong className={styles.sectionSecondSlogan}>
          Почни свій шлях і ти
        </strong>
        <strong className={styles.sectionSecondSlogan}>
          Давай заощяджувати разом!
        </strong>
      </p>

      <Swiper
        className={styles.sliderWrap}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={2}
        centeredSlides
        initialSlide={1}
        pagination={{
          clickable: true,
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        // style={{width: "auto", height: "302px", marginBottom: "16px"}}
      >
        {servicesList.map(({title, price, priceithFeedback, currency}, idx) => (
          <SwiperSlide
            key={idx}
            className={styles.sliderSlide}
            // className="-top-5"
            // style={{width: "156px", height: "252px"}}
          >
            <div
              className="services-swiper-box"
              style={{width: "156px", height: "100%"}}
            >
              <div className="services-card-buy-title services-card-buy-title-after">
                <h3>{title}</h3>
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

      <a className={styles.servicesBtnBuy} href="#">
        Купити
      </a>
    </section>
  );
};
