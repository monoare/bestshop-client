import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../HomePage/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { loginWithEmail, googleUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // password validation

    if (password.length < 8) {
      toast.error(
        "A minimum of eight characters is required for the password."
      );
      return;
    }

    // Attempt to login with email
    loginWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        // Check if the error message indicates incorrect credentials
        if (error.code === "auth/invalid-login-credentials") {
          toast.error("Login failed. Please check your email and password.");
        }
      });
  };
  // Attempt to login with google
  const handleGoogleLogin = () => {
    googleUser()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="md:my-10">
        <Navbar></Navbar>
      </div>
      <div className="hero min-h-screen bg-base-200 font-raleway mb-10">
        <form onSubmit={handleLogin} className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl pt-5 font-bold mb-4">
              Already Registered?
            </h1>
            <p className="py-6 text-xl md:text-3xl font-bold">Login now!</p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center w-full border bg-[#E30E31] border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 mb-4"
              >
                <FcGoogle className="text-2xl"></FcGoogle>
                <p className="mx-auto text-white">Continue with Google</p>
              </button>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    className="input input-bordered w-full"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    id=""
                    required
                  />
                  <span
                    className="absolute top-4 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
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
                <h2 className="md:text-2xl font-bold mt-5 text-center hover:text-[#48CAB2]">
                  New Customer
                </h2>
                <p className="text-justify text-sm md:text-lg mt-4">
                  By creating an account with our store, you will be able to
                  move through the checkout process faster, store multiple
                  shipping addresses, view and track your orders in your account
                  and more.
                </p>
                <NavLink to="/register" className="form-control mt-6">
                  <button className="btn bg-black hover:bg-[#48CAB2] text-white font-bold">
                    Create an Account
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
