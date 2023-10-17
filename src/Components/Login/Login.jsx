import Navbar from "../HomePage/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hero min-h-screen bg-base-200 font-raleway">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Already Registered?</h1>
            <p className="py-6 text-3xl font-bold">Login now!</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn hover:bg-black bg-[#48CAB2] text-white font-bold">
                  Login
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-bold mt-5 text-center">
                  New Customer
                </h2>
                <p className="text-justify mt-4">
                  By creating an account with our store, you will be able to
                  move through the checkout process faster, store multiple
                  shipping addresses, view and track your orders in your account
                  and more.
                </p>
                <div className="form-control mt-6">
                  <button className="btn bg-black hover:bg-[#48CAB2] text-white font-bold">
                    Create an Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
