import Image from 'next/image'
import styled from '../styles/Reviews.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const reviews = [
  { id: 1, photoFilename: 'Rectangle 5.jpg' },
  { id: 2, photoFilename: 'Rectangle 6.jpg' },
    { id: 3, photoFilename: 'Rectangle 31.jpg' },
    { id: 4, photoFilename: 'Rectangle1.jpg'},
    { id: 5, photoFilename: 'Rectangle2.jpg' },
  { id: 6, photoFilename: 'Rectangle3.jpg'},
  
];


export const Reviews = () => { 


    return (
      
        <section className={styled.reviews_container}>
            <div className={styled.container}>
                <h3 className={styled.title}>Відгуки моїх учнів</h3>
                <div >
                    <Swiper
                    className={styled.swiper_container}
                   
                    pagination
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{ delay: 1000 }}
                    >
                {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                        <Image src={`/images/reviews/${review.photoFilename}`} alt={review.title} width={272} height={172} />
                       
         
        </SwiperSlide>
      ))}
    </Swiper>
                    
                </div>
                  <a target="_blank" href='https://t.me/Maria_09_07' className={styled.btn}>Купити курс</a>
            </div>

        </section>

    )
}
