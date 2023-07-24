import {Pagination, A11y} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import {servicesList} from "@/data/servicesList";

import styles from "../styles/Services.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const ServicesSection = () => {
  return (
    <section id="services" className={styles.container}>
      <div className={styles.paddingWrapper}>
        <div className={styles.mobTablet}>
          <h2 className={styles.title}>TAOBAO /1688/ Pinduoduo/ WeChat</h2>
          <p className={styles.sloganWrap}>
            <strong className={styles.slogan}>
              Запамʼятай ці 4 назви, якщо хочеш купувати речі в 5 разів дешевше
              або відкрити свій магазин
            </strong>
          </p>
          <p className={styles.info}>
            Мій курс вже пройшли 100+ учнів, та більшість вже відкрили свої
            магазини
          </p>
          <p>
            <strong className={styles.secondSlogan}>
              Почни свій шлях і ти
            </strong>
          </p>
          <p className={styles.sloganWrap}>
            <strong className={styles.secondSlogan}>
              Давай заощаджувати разом!
            </strong>
          </p>
        </div>

        <div className={styles.desktop}>
          <div className={styles.leftRound}></div>
          <div className={styles.desktopWrap}>
            <p>
              <strong className={styles.secondSlogan}>
                Почни свій шлях і ти
              </strong>
            </p>
            <p className={styles.sloganWrap}>
              <strong className={styles.secondSlogan}>
                Давай заощаджувати разом!
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.swiperDescWrap}>
        <Swiper
          className={styles.sliderWrap}
          modules={[Pagination, A11y]}
          centeredSlides
          initialSlide={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              pagination: false,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 5,
              pagination: false,
            },
          }}
        >
          {servicesList &&
            servicesList.map(
              ({id, title, price, priceWithFeedback, currency}) => (
                <SwiperSlide key={id} className={styles.slide}>
                  <div className={styles.slideInner}>
                    <div className={styles.slideTitleBox}>
                      <h3 className={styles.slideTitle}>{title}</h3>
                    </div>

                    <ul className={styles.slideCardWrap}>
                      <li className={styles.cardPriceInner}>
                        <p className={styles.slideCardDescr}>
                          самостійне проходження
                        </p>
                        <p
                          className={styles.slideCardPrice}
                        >{`${price} ${currency}`}</p>
                      </li>
                      <li className={styles.cardPriceInner}>
                        <p className={styles.slideCardDescr}>
                          зі зворотнім зв’язком
                        </p>
                        <p
                          className={styles.slideCardPrice}
                        >{`${priceWithFeedback} ${currency}`}</p>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              )
            )}
        </Swiper>
      </div>

      <div className={styles.paddingWrapper}>
        <div className={styles.mobTablet}>
          <a
            href="https://t.me/Maria_09_07"
            target="_blank"
            rel="noopener"
            className={styles.btnBuy}
          >
            Купити
          </a>
        </div>
        <div className={styles.desktopBtn}>
          <a
            href="https://t.me/Maria_09_07"
            target="_blank"
            rel="noopener"
            className={styles.btnBuy}
          >
            Купити курс
          </a>
        </div>
      </div>
    </section>
  );
};
