
import Image from "next/image"


 export const Hero = () => {

     return (
         <>
        
             <div className="w-full  bg-center bg-cover  bg-[url('/bg-mary.jpg')] " >
                 <div className="flex items-center justify-center  " style={{
                     backgroundImage: 'linear-gradient(180deg, #000 16.45%, rgba(0, 0, 0, 0.00) 100%)'
                 }}>
                 <h1 className=" px-10   mb-60 pt-7  text-title font-heading text-2xl font-bold text-center  " >
                     Хочеш купувати бренди дешевше ніж в Україні?
                     Тоді тобі точно сюди !
                     </h1>
                     </div>
                <div className="ml-2 mb-4" >
                    <Image src="group.svg" alt="Logo" width={128} height={64} />
                 </div>
                 <div className="flex space-y-4 items-center justify-center flex-col">
                     <h3 className="font-sans text-xl text-title-light text-center" >На звʼязку Марія! 
                         Вже більше року я працюю з Китаєм та маю власний магазин жіночого одягу. 
                         
                     </h3>
                     <a  className="w-40 h-12 flex items-center font-heading bg-button-pay px-3 py-4 rounded-3xl font-bold shadow-button-pay" href="#">@egoistka.brand</a>
                     <h3 className="font-sans text-xl text-title-light text-center">Веду власну сторінку в інстаграм, де розповідаю про шопінг в Китаї та ділюсь різними фішками 
                     </h3>
                      <a  className="w-40 h-12 flex items-center font-heading bg-button-pay px-3  py-4 rounded-3xl font-bold shadow-button-pay" href="#">@maria__yatsenko</a>

                 </div>
                 

             </div> 
                 
                    
                    
                
            </>
     )
     
}


