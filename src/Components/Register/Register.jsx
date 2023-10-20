import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../HomePage/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const accepted = e.target.terms.checked;
    console.log(email, password);
    console.log(password.length);

    // reset error and success

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters or longer.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Your password should have at least one upper case letter.");
      return;
    } else if (!/[-!$%^&*()_+|~=`{}\\[\]:";'<>?,.@\\/]/g.test(password)) {
      toast.error("Your password should have at least one special character.");
      return;
    } else if (!accepted) {
      toast.error("Please accept our terms and conditions!");
      return;
    }
    // Create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User created successfully!");
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.info("You already have an account. Please login");
        }
      });
  };

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hero min-h-screen bg-base-200 font-raleway mb-10">
        <form onSubmit={handleRegister} className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Don&apos;t have an Account?
            </h1>
            <p className="py-6 text-3xl font-bold">Register now!</p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
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
                <div className="mt-4">
                  <input type="checkbox" name="terms" id="terms" />
                  <label className="ml-2" htmlFor="terms">
                    Accept our{" "}
                    <a className="underline text-blue-600" href="">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn hover:bg-black bg-[#48CAB2] text-white font-bold">
                  Register
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-bold mt-5 text-center hover:text-[#48CAB2]">
                  Already a Valued Customer
                </h2>
                <p className="text-justify mt-4">
                  As an existing member of our community, we greatly appreciate
                  your continued trust and support. Your account with us offers
                  a host of benefits, making your shopping experience more
                  convenient and personalized.
                </p>
                <NavLink to="/register" className="form-control mt-6">
                  <button className="btn bg-black hover:bg-[#48CAB2] text-white font-bold">
                    Please Login
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

export default Register;
