import Brands from "../../BrandNames/Brands";
import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <Banner></Banner>
      </div>

      <div className="my-20 mx-20 pt-10">
        <p className="text-center text-5xl font-raleway font-bold mb-8 hover:text-[#48CAB2]">
          Signature Brands Collection
        </p>
        <Brands></Brands>
      </div>

      <div className="py-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
