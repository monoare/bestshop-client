import Brands from "../../BrandNames/Brands";
import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto mb-14">
        <Banner></Banner>
      </div>
      <Brands></Brands>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
