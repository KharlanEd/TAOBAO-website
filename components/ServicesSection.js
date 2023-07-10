import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
    <section className="pb-8 text-center px-4 ">
      <h2 className="services-title ">TAOBAO/1688/Pinduoduo/ WeChat</h2>
      <strong className="block pb-8 font-sans text-title text-sm">
        Запамʼятай ці 4 назви, якщо хочеш купувати речі в 5 разів дешевше або
        відкрити свій магазин
      </strong>
      <p className="services-card-info">
        Мій курс вже пройшли 30+ учнів та деякі вже відкрили свої магазини
      </p>
      <strong className="block pb-8 font-heading text-title text-sm">
        Почни свій шлях і ти Давай заощяджувати разом!
      </strong>

      <Swiper
        className="mb-1"
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
        style={{width: "auto", height: "302px", marginBottom: "16px"}}
      >
        {servicesList.map(({title, price, priceithFeedback, currency}, idx) => (
          <SwiperSlide
            key={idx}
            className="-top-5"
            style={{width: "156px", height: "252px"}}
          >
            <div
              className="services-swiper-box"
              style={{width: "156px", height: "100%"}}
            >
              <div className="services-card-buy-title services-card-buy-title-after">
                <h3>{title}</h3>
              </div>

              <ul className="p-4 bg-gradient-to-b from-violet-dark to-violet-light-dark">
                <li>
                  <p className="font-sans text-left">самостійне проходження</p>
                  <p className="font-heading font-bold">{`${price} ${currency}`}</p>
                </li>
                <li>
                  <p className="font-sans text-left"> Зі зворотнім зв’язком</p>
                  <p className="font-heading font-bold">{`${priceithFeedback} ${currency}`}</p>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <a
        className="services-button-buy"
        style={{
          boxShadow: "0px 0px 21px 11px rgba(241, 96, 96, 0.50)",
        }}
        href="#"
      >
        Купити
      </a>
    </section>
  );
};
