import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import stock from "../../assets/Out-of-Stock-Product-Pages-WordPress.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { AwesomeButton } from "react-awesome-button";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  const { brandName } = useParams();
  // Access the brand name from the route

  // Now you can use the brandName in your Products component
  console.log("Brand Name from route:", brandName);

  console.log("brandName:", brandName);
  console.log("products.brand:", products.brand);

  const filterBrand = products.filter((product) =>
    new RegExp(brandName.replace(/[.'*+?^${}()|[\]\\]/g, "\\$&"), "").test(
      product.brand
    )
  );
  console.log("data matched", filterBrand);

  const handleDetails = (_Id) => {
    console.log(_Id);
  };

  return (
    <div>
      <div className="md:mt-5 md:mb-5">
        <Navbar></Navbar>
      </div>
      <div className="">
        {filterBrand ? (
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:gap-6">
            {filterBrand.map((product) => (
              <div key={product._id}>
                <div className="shadow-lg rounded-lg bg-gray-100 md:w-2/3 text-center mx-auto mb-10">
                  <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img className="p-6" src={product.image1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="p-6" src={product.image2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="p-6" src={product.image3} alt="" />
                    </SwiperSlide>
                  </Swiper>
                  <div className="text-center lg:text-left md:pl-10 md:pt-5">
                    <p className="font-medium mb-2">
                      Name:
                      <span className="text-blue-700 uppercase">
                        {"  "}
                        {product.name}
                      </span>
                    </p>
                    <p className="font-medium mb-2">
                      Brand Name:{"  "}
                      <span className="text-green-600 font-bold font-raleway">
                        {product.brand}
                      </span>
                    </p>
                    <p className="font-medium mb-2">
                      Type: {"  "}
                      <span className="text-green-600 font-bold font-raleway">
                        {product.type}
                      </span>
                    </p>
                    <p className="font-medium mb-2">
                      Price:{" "}
                      <span className="text-green-600 font-bold font-raleway">
                        ${product.price}
                      </span>
                    </p>
                    <p className="font-medium mb-2">
                      Rating: {"  "}
                      <span className="text-green-600 font-bold font-raleway">
                        {product.rating}/5
                      </span>
                    </p>

                    <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-between pb-5 lg:pr-10">
                      <Link
                        onClick={() => handleDetails(product._id)}
                        to={`/details/${product._id}`}
                      >
                        <AwesomeButton type="secondary" size="medium">
                          Details
                        </AwesomeButton>
                      </Link>
                      <Link to={`/update/${product._id}`}>
                        <AwesomeButton type="secondary" size="medium">
                          Update
                        </AwesomeButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>Products are out of stock</p>
            <img src={stock} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
