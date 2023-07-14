import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";

import {AboutCourses} from "@/components/AboutCourses";

import {Hero} from "@/components/Hero";
import {Layout} from "@/components/Layout";
import {ServicesSection} from "@/components/ServicesSection";
import {About} from "@/components/About";

const inter = Inter({subsets: ["latin"]});

// export const getStaticProps = async () => {
//   const response = await fetch(`${process.env.LOCAL_HOST}/api/services`);
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {servicesList: data},
//   };
// };

// export default function Home({servicesList}) {
export default function Home() {
  return (
    <>
      <Head>
        <title>Taobao</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Layout> */}
      <Hero />
      {/* <ServicesSection servicesList={servicesList} /> */}
      <ServicesSection />
      <About />
      <AboutCourses />
      {/* </Layout> */}
    </>
  );
}
