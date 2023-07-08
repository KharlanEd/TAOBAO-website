// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

// import {Montserrat, Philosopher} from "@next/font/google";

// const montserrat = Montserrat({subsets: ["latin"], weight: "variable"});
// const philosopher = Philosopher({subsets: ["latin"], weight: "400"});

export default function Home() {
  return (
    <>
      {/* <h1 className={philosopher.className}>TAOBAO</h1> */}
      <h1>TAOBAO</h1>
      <p
        // className={montserrat.className}
        style={{
          backgroundColor: "#372948",
          width: 300,
          color: "white",
          padding: 20,
          borderRadius: 8,
        }}
      >
        Хочеш купувати бренди дешевше ніж в Україні? Тоді тобі точно сюди !
      </p>
    </>
  );
}
