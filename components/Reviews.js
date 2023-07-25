import Image from "next/image";
import styled from "../styles/Reviews.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const reviews = [
  { id: 1, photoFilename: "IMG_3633.PNG" ,width: 300, height: 767},
  { id: 2, photoFilename: "IMG_3634.PNG" ,width: 300, height: 469},
  { id: 3, photoFilename: "IMG_3636.PNG" ,width: 300, height: 552},
  { id: 4, photoFilename: "IMG_3637.PNG" ,width: 300, height: 270},
  { id: 5, photoFilename: "Rectangle2.jpg" ,width: 300, height: 173},
  { id: 6, photoFilename: "Rectangle3.jpg" ,width: 300, height: 172},
  { id: 7, photoFilename: "IMG_3650.PNG" ,width: 300, height: 582},
  { id: 8, photoFilename: "IMG_2954.jpg" ,width: 300, height: 220},
];

export const Reviews = () => {
  const swiperRef = useRef(null);

  return (
    <section id="reviews" className={styled.reviews_container}>
      <div className={styled.container}>
        <h3 className={styled.title}>Відгуки моїх учнів</h3>
        <div className={styled.wrapper_content}>
          <Image
            className={styled.visible}
            src="/images/reviews/5305.png"
            width={320}
            height={255}
            alt="reviews"
          />
          <Swiper
            className={styled.swiper_container}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            injectStyles={{
              ".swiper-button-next, .swiper-button-prev": {
                backgroundColor: "white",
                padding: "8px 16px",
                borderRadius: "100%",
                border: "2px solid black",
                color: "red",
              },
            }}
            modules={[Autoplay, Navigation]}
            pagination
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
          >
            {reviews.map((review) => (
              <SwiperSlide className={styled.sw_slide} key={review.id}>
                <Image
                  className={styled.swiper_img}
                  src={`/images/reviews/${review.photoFilename}`}
                  alt={review.title}
                  width={review.width} height={review.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            onClick={() => swiperRef.current.slideNext()}
            className={styled.navigationBtn}
          >
            <Image
              src="/arrow-rigth.svg"
              width={60}
              height={102}
              alt="arrow left icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
