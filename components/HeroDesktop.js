import Image from "next/image"
import styled from "../styles/HeroDesktop.module.css"

export const HeroDesktop = () => {
    

    return (
        
        <section className={styled.container}>
             <div className={styled.svg_container} >
                         <Image className={styled.svg} src="/images/product/heloo.svg" alt="Logo" width={229} height={113} />
                         <span className={styled.textsvg}>Привіт</span>
                     </div>
            <div className={styled.container_content}>
                <Image className={styled.img} src="/images/product/mary_hero.jpg" width={342} height={530} alt="mary" />
                <div>
                    <p className={styled.text}>На звʼязку Марія! 
                        Вже більше року я працюю з Китаєм та маю власний магазин жіночого одягу. 
                    </p>
                    <p className={styled.text}>Веду власну сторінку в інстаграм, де розповідаю про шопінг в Китаї та ділюсь різними фішками 
                    </p>
                    <div className={styled.link_wrapper}>
                        <a
                             target="_blank"
                             rel="noopener"
                             href="https://instagram.com/egoistka.brand?igshid=Y2IzZGU1MTFhOQ=="
                            className={styled.link}>@egoistka.brand</a>
                        <a
                             target="_blank"
                             rel="noopener"
                             href="https://instagram.com/maria__yatsenko?igshid=Y2IzZGU1MTFhOQ=="
                            className={styled.link}>@maria__yatsenko</a>
                    </div>
                </div>
            </div>
        </section>
    )
}