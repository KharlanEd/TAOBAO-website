import { Sw } from "./Swiper";
import style from "../styles/AboutCourses.module.css";

export const ProductCourusel = () => {
  return (
    <section className={style.swiper_section}>
      <div className={style.swiper_container}>
        <Sw />
      </div>
    </section>
  );
};
