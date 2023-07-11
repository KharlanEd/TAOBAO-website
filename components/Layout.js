import { Footer } from "./Footer";
import { Header } from "./Header";


export const Layout = ({ children }) => {
  return (
    <div className="container  mx-auto px-4 sm:px-4 md:px-4 lg:px-4  background-image:  linear-gradient(180deg, #000 10%, rgba(0, 0, 0, 0.00) 35%), url('../public/images/product/bg-mb.jpg'); ">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};