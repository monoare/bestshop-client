import Swal from "sweetalert2";
import Navbar from "../HomePage/Navbar/Navbar";

const AddProduct = () => {
  const handleInput = (e) => {
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

    const newProduct = {
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
    console.log(newProduct);

    // send data to the server
    fetch(
      "https://best-shop-server-1ilrmtj1v-monoare-hossains-projects.vercel.app/product",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Good Job!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          // Clear input fields after successful addition
          form.reset();
        }
      });
  };

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="mt-4 bg-base-200">
        <form onSubmit={handleInput} className="hero bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-xl md:text-3xl py-5 font-bold">
                Add Details of a Product
              </h1>
            </div>
            <div className="card w-full shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    {/* Image-1 input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">First Photo URL</span>
                      </label>
                      <input
                        type="text"
                        name="image1"
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
                        placeholder="Product Name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>

                  {/* Second Column */}

                  <div className="w-full">
                    {/* Brand input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Product Brand</span>
                      </label>
                      <input
                        type="text"
                        name="brand"
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
                        step="0.01"
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
                        step="0.1"
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
                    placeholder="Short description"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add Product</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
