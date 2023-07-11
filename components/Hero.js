import styled from "../styles/Hero.module.css"
import Image from "next/image"


 export const Hero = () => {

     return (
         <>
        
             <div className={styled.bg_wraper}>
                 <div className={styled.text_animation}>
                 <h1 className={styled.title}>
                    Хочеш купувати бренди дешевше ніж в Україні? Тоді тобі точно сюди !
                     </h1> 
                 </div>    
                 <h3 className={styled.text}>На звʼязку Марія! Вже більше року я працюю з Китаєм та маю власний магазин жіночого одягу. 
                </h3>

             </div>
              
            
                 
                    
                    
                
            </>
     )
     
}


