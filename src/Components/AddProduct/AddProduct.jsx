import Navbar from "../HomePage/Navbar/Navbar";

const AddProduct = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="mt-4 bg-base-200">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Add Details of a Product</h1>
            </div>
            <div className="card w-full shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="flex gap-6">
                  <div className="w-full">
                    {/* Image input field */}
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text">
                          Choose the product image
                        </span>
                      </label>
                      <input
                        type="file"
                        className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                      />
                    </div>

                    {/* Name input field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Product Name</span>
                      </label>
                      <input
                        type="text"
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
                        placeholder="From 0 to 5"
                        className="input input-bordered"
                        min={0}
                        max={5}
                        required
                      />
                      <small></small>
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
                    placeholder="Short description"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
