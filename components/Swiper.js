import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import style from '../styles/AboutCourses.module.css'

import { products } from "@/data/products";

export const Sw = () => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={2}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      modules={[Autoplay]}
      effect="slide"
      centeredSlides={true}
      speed={1000}
      style={{ width: "100%", height: "241px" }}
      breakpoints={{
        375: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        470: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 6,
          spaceBetween: 20,
        },

        1280: {
          slidesPerView: 6,
          spaceBetween: 80,
        },
      }}
    >
      {products.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <div className={style.slide_wrapper}>
                    <img style={{borderRadius: '24px 24px 0 0'}}
                srcset={`${product.photo.src} 1x, ${product.photoRetina.src} 2x`}
                src={product.photo}
                alt="d"
              />
                    <div className={style.slide_thumb}>
                <ul className={style.country_list}>
                  <li className={style.county_item}>{product.importCountry}</li>
                  <li>{product.madeCounty}</li>
                </ul>
                <ul className={style.price_list}>
                  <li>{product.importPrice}грн</li>
                  <li>{product.madePrice}грн</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
