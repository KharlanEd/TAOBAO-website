import { Footer } from "./Footer";
import { Header } from "./Header";


export const Layout = ({ children }) => {
  return (
    <div className="container bg-bg-container mx-auto px-4 sm:px-4 md:px-4 lg:px-4 ">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};