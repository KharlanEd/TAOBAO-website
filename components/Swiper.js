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
      style={{ width: "400px", height: "400px" }}
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
                <ul>
                  <li>{product.importCountry}</li>
                  <li>{product.madeCounty}</li>
                </ul>
                <ul>
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
