import { useLoaderData } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  console.log(product);
  const { _id, name, image, brand, type, price, rating, description } = product;

  const handleUpdatedProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const updatedProduct = {
      name,
      image,
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
        <form onSubmit={handleUpdatedProduct} className="hero bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Add Details of a Product</h1>
            </div>
            <div className="card w-full shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="flex gap-6">
                  <div className="w-full">
                    {/* Image input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        type="text"
                        name="image"
                        defaultValue={image}
                        placeholder="Image URL"
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
                  </div>

                  <div className="w-full">
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
                      <input
                        type="number"
                        name="price"
                        defaultValue={price}
                        placeholder="Price"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* Rating input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Rating</span>
                      </label>
                      <input
                        type="number"
                        name="rating"
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
    </div>
  );
};

export default UpdateProduct;
