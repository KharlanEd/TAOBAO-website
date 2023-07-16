import styled from "../styles/Hero.module.css"
import Image from "next/image"


 export const Hero = () => {

     return (
         <>
            <section className={styled.section_hero}>
                <div className={styled.container}>
                    <div >
                        <h1 className={styled.title}>
                             Хочеш купувати бренди дешевше ніж в Україні? Тоді тобі точно сюди !
                        </h1> 
                     </div>  
                   <div className={styled.svg_container} >
                         <Image className={styled.svg} src="/images/product/heloo.svg" alt="Logo" width={125} height={68} />
                         <span className={styled.textsvg}>Привіт</span>
                     </div>
                     <div className={styled.container_text}>
                         <h3 className={styled.text}>На звʼязку Марія! Вже більше року я працюю з Китаєм та маю власний магазин жіночого одягу. 
                         </h3>  
                         <a
                             className={styled.hero_btn}
                             target="_blank"
                             rel="noopener"
                             href="https://instagram.com/egoistka.brand?igshid=Y2IzZGU1MTFhOQ==" >@egoistka.brand</a>
                         
                        
                     </div>

                   
                    

                 
                 
                   <div  >
                           <h3 className={styled.text} >Веду власну сторінку в інстаграм, де розповідаю про шопінг в Китаї та ділюсь різними фішками 
 
                         </h3>  
                         <a
                             className={styled.hero_btn}
                             target="_blank"
                             rel="noopener"
                             href="https://instagram.com/maria__yatsenko?igshid=Y2IzZGU1MTFhOQ==" >@maria__yatsenko</a>
                     </div>
                     </div>
                    
            </section>
            
                 
                    
                    
                
            </>
     )
     
}


