import { useLoaderData } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const UpdateProduct = () => {
  const product = useLoaderData();
  console.log(product);
  const {
    _id,
    name,
    image1,
    image2,
    image3,
    brand,
    type,
    price,
    rating,
    description,
  } = product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image1 = form.image1.value;
    const image2 = form.image2.value;
    const image3 = form.image3.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const updatedProduct = {
      name,
      image1,
      image2,
      image3,
      brand,
      type,
      price,
      rating,
      description,
    };
    console.log(updatedProduct);

    // send data to the server
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good Job!",
            text: "Product Updated Successfully",
            icon: "Success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="mt-4 bg-base-200">
        <form onSubmit={handleUpdateProduct} className="hero bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center py-8 lg:text-left">
              <h1 className="text-3xl font-bold ">
                Elevate Your Style with Our Updated Fashion and Apparel
                Collection
              </h1>
            </div>
            <div className="card w-full shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="flex gap-6">
                  {/* First column */}
                  <div className="w-full">
                    {/* Image-1 input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">First Photo URL</span>
                      </label>
                      <input
                        type="text"
                        name="image1"
                        defaultValue={image1}
                        placeholder="First Image URL"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    {/* Image-2 input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Second Photo URL</span>
                      </label>
                      <input
                        type="text"
                        name="image2"
                        defaultValue={image2}
                        placeholder="Second Image URL"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* Image-3 input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Third Photo URL</span>
                      </label>
                      <input
                        type="text"
                        name="image3"
                        defaultValue={image3}
                        placeholder="Third Image URL"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    {/* Name input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Product Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        placeholder="Product Name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>

                  {/* Second column */}
                  <div className="w-full">
                    {/* Brand input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Product Brand</span>
                      </label>
                      <input
                        type="text"
                        name="brand"
                        defaultValue={brand}
                        placeholder="Brand"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    {/* Type input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Type</span>
                      </label>
                      <input
                        type="text"
                        name="type"
                        defaultValue={type}
                        placeholder="Type"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    {/* price input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <div className="flex items-center relative w-full">
                        <span className="absolute ml-4 font-semibold">$</span>
                        <input
                          type="number"
                          name="price"
                          defaultValue={price}
                          placeholder="Price"
                          step="0.01"
                          className="input input-bordered pl-7 w-full"
                          required
                        />
                      </div>
                    </div>
                    {/* Rating input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Rating</span>
                      </label>
                      <input
                        type="number"
                        name="rating"
                        step="0.1"
                        defaultValue={rating}
                        placeholder="From 0 to 5"
                        className="input input-bordered"
                        min={0}
                        max={5}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Short description input field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short description</span>
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    defaultValue={description}
                    placeholder="Short description"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    Update the Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="py-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default UpdateProduct;
