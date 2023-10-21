import { useState } from "react";
import Blog from "../../Blog/Blog";
import Brands from "../../BrandNames/Brands";
import Collections from "../../Collections/Collections";
import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColor = () => {
    setIsDarkMode(!isDarkMode);
  };

  const backgroundColorClass = isDarkMode ? "bg-gray-500" : "bg-dark-800";
  const textColorClass = isDarkMode ? "text-black" : "text-white";
  const titleTextColorClass = isDarkMode ? "text-blue" : "text-red";
  const navbarBgColorClass = isDarkMode ? "bg-dark-800" : "bg-gray-500";

  return (
    <div
      className={`text-${textColorClass} min-h-screen transition-colors duration-500 ${backgroundColorClass}`}
    >
      <div className="">
        <label className="flex justify-end pt-2 pr-2 items-center cursor-pointer">
          <span className="text-xs md:text-sm pr-2">Toggle Dark Mode</span>
          <input
            type="checkbox"
            className="toggle toggle-xs md:toggle-sm"
            checked={isDarkMode}
            onChange={toggleColor}
          />
        </label>
        <div>
          <Navbar navbarBgColorClass={navbarBgColorClass}></Navbar>
          <div className="container mx-auto">
            <Banner></Banner>
          </div>

          <div
            className={`my-5 md:my-20 mx-2 md:mx-20 pt-10 ${titleTextColorClass}`}
          >
            <p
              className={`text-center text-xl md:text-5xl font-raleway font-bold mb-8 hover:text-[#48CAB2]`}
            >
              Signature Brands Collection
            </p>
            <Brands></Brands>
          </div>

          <div className="border-b-2"></div>

          <div className={`mb-20 ${textColorClass}`}>
            <Collections></Collections>
          </div>

          <div className="border-b-2 mb-10"></div>

          <div>
            <Blog></Blog>
          </div>

          <div className={`${textColorClass}`}>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
