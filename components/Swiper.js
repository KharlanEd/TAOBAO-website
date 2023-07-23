import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";

import Image from 'next/image';

import "swiper/css";
import style from '../styles/AboutCourses.module.css'

import { products } from "@/data/products";

export const Sw = () => {
  const swiperRef = useRef();
  return (<>
    <button type="button" onClick={() => swiperRef.current.slidePrev()} className={style.navigationBtn}>
      <Image src='/arrow-left.svg' width={40} height={82} alt='arrow left icon' />
      </button>
    <Swiper
      onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      spaceBetween={40}
      slidesPerView={2}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}

      modules={[Autoplay,Navigation]}
      effect="slide"
      centeredSlides={true}
      speed={1000}
      injectStyles={{
          '.swiper-button-next, .swiper-button-prev': {
          backgroundColor: 'white',
          padding: '8px 16px',
          borderRadius: '100%',
          border: '2px solid black',
          color: 'red',
        },
        }}
      style={{ width: "100%", height: "241px" }}
      breakpoints={{
        375: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2.5,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 160,
        },
      }}
    >
      {products.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <div className={style.slide_wrapper}>
              <img style={{ borderRadius: '24px 24px 0 0' }} width={156} height={177}
                srcSet={`${product.photo.src} 1x, ${product.photoRetina.src} 2x`}
                src={product.photo.src}
                alt={product.alt}
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
    <button type='button' onClick={() => swiperRef.current.slideNext()} className={style.navigationBtn}>
      <Image src='/arrow-rigth.svg' width={40} height={82} alt='arrow left icon' />
      </button>
    
    </>
  );
};
