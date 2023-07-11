import { Sw } from "./Swiper"
import style from '../styles/AboutCourses.module.css'


export const AboutCourses = () => { 
    return (
        <section className={style.section}>
            <div className={style.container}>
                <h2 className={style.title}>Чому ви навчитесь після курсу ?</h2>
                <ul className={style.description}>
                <li className={style.description_item}>Як зареєструватись щоб не заблокували аккаунт</li>
                <li className={style.description_item}>Без знань китайської користуватись сайтом та додатками </li>
                <li className={style.description_item}>Викуповувати речі без переплати посередникам </li>
                <li className={style.description_item}>Знаходити речі різними способами (по фото з інстаграм один із способів)</li>
                <li className={style.description_item}>Як спілкуватись з продавцем</li>
                <li className={style.description_item}>Здійснювати оплату напряму своєю картою (visa/Mastercard)</li>
                <li className={style.description_item}>Доставляти в Україну різними перевізниками (на курсі їх буде 6)</li>
                </ul>
            </div>
            <div className={style.swiper_container}>
                <Sw />
                </div>
     </section>
 )
}
