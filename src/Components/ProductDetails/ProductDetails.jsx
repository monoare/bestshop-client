import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import { AwesomeButton } from "react-awesome-button";
import Footer from "../Footer/Footer";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const filterDetails = details.find((product) => product._id == id);

  // Create a new object without the _id field
  const filterDetailsToSend = { ...filterDetails };
  delete filterDetailsToSend._id;

  const handleCart = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/cart/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(filterDetailsToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          if (data.insertedId) {
            Swal.fire({
              title: "Good Job!",
              text: "Product Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        }
      });
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center gap-4 mt-20 mb-10">
        <div className="flex flex-col w-1/4">
          <div>
            <img
              className="w-full h-[50vh]"
              src={filterDetails.image1}
              alt=""
            />
          </div>
          <div className="flex">
            <div>
              <img className="h-[30vh]" src={filterDetails.image2} alt="" />
            </div>
            <div>
              <img className="h-[30vh]" src={filterDetails.image3} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-5 ml-4 w-1/4">
          <p className="uppercase font-bold max-w-fit p-2 bg-blue-600 text-white mb-4">
            New
          </p>
          <p className="text-4xl font-bold mb-4">
            <span>Product Name: </span>
            <span>{filterDetails.name}</span>
          </p>
          <p className="text-4xl font-bold mb-4">
            <span>Price: </span>
            <span className="text-4xl text-[#48CAB2] font-bold">
              ${filterDetails.price}
            </span>
          </p>
          <p className="mb-4">
            <span className="text-lg font-bold font-raleway ">Brand Name:</span>{" "}
            <span className="text-lg font-bold font-raleway">
              {filterDetails.brand}
            </span>
          </p>
          <p className="mb-4">
            <span className="text-lg font-medium">Product Description: </span>
            <span className="text-lg font-raleway ">
              {filterDetails.description}
            </span>
          </p>
          <p className="text-lg font-semibold mb-4">
            Product Type: {filterDetails.type}
          </p>
          <div className="text-lg font-semibold mb-4 flex items-center">
            <span> Rating: </span>
            <Rating style={{ maxWidth: 250 }} readOnly={filterDetails.rating} />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold">Size:</p>
            <div className="flex gap-2">
              <p className="uppercase text-base  p-2 border border-black hover:border-2 hover:text-lg hover:font-bold ">
                xs
              </p>
              <p className="uppercase text-base  p-2 border border-black hover:border-2 hover:text-lg hover:font-bold ">
                s
              </p>
              <p className="uppercase text-base  p-2 border border-black hover:border-2 hover:text-lg hover:font-bold ">
                m
              </p>
              <p className="uppercase text-base  p-2 border border-black hover:border-2 hover:text-lg hover:font-bold ">
                l
              </p>
              <p className="uppercase text-base  p-2 border border-black hover:border-2 hover:text-lg hover:font-bold ">
                xl
              </p>
              <p className="uppercase text-base  p-2 border border-black hover:border-2 hover:text-lg hover:font-bold ">
                xxl
              </p>
              <p className="uppercase text-base  p-2 border border-black hover:border-2 hover:text-lg hover:font-bold ">
                xxl
              </p>
            </div>
          </div>
          <div className="mt-4">
            <form onSubmit={handleCart}>
              <AwesomeButton className="w-full" type="secondary" size="full">
                Add to Cart
              </AwesomeButton>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-14 mb-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ProductDetails;
