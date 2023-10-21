import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/BestShopLogo.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userLogin, setUserLogin] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error));
  };

  const activeLink =
    "lg:text-lg text-[#48CAB2] font-raleway font-bold underline";
  const normalLink = "lg:text-lg text-Black font-raleway font-bold";
  const navLinks = (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="mr-4 pl-2 pb-2 md:pl-0 md:pb-0 transition hover:underline hover:text-[#48CAB2]">
              Home
            </p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="mr-4 pl-2 pb-2 md:pl-0 md:pb-0 transition hover:underline hover:text-[#48CAB2]">
              Add Products
            </p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="mr-4 pl-2 pb-2 md:pl-0 md:pb-0 transition hover:underline hover:text-[#48CAB2]">
              Add to Cart
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogPage"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p className="mr-4 pl-2 pb-2 md:pl-0 md:pb-0 transition hover:underline hover:text-[#48CAB2]">
              Blog
            </p>
          </NavLink>
        </li>
        {user ? (
          <li className="md:hidden">
            <Link
              onClick={() => {
                handleLogOut();
                setUserLogin(!userLogin);
              }}
              to="/login"
              className="lg:text-lg pl-2 pb-2 md:pl-0 md:pb-0 font-bold text-black transition hover:underline hover:text-[#48CAB2]"
            >
              Logout
            </Link>
          </li>
        ) : (
          <li className="md:hidden">
            <Link
              to="/login"
              className="lg:text-lg pl-2 pb-2 md:pl-0 md:pb-0 font-bold text-black transition hover:underline hover:text-[#48CAB2]"
            >
              Login
            </Link>
          </li>
        )}
        {user ? null : (
          <li className="md:hidden">
            <Link
              to="/register"
              className="lg:text-lg pl-2 pb-2 md:pl-0 md:pb-0 font-bold text-black transition hover:underline hover:text-[#48CAB2]"
            >
              Register
            </Link>
          </li>
        )}
      </div>
    </>
  );
  return (
    <div className="md:mb-7">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content m-3 z-[3] bg-slate-500 p-2 underline rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="lg:absolute">
          <img className="w-[30vw]" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex ">
            {user ? (
              <Link
                onClick={() => {
                  handleLogOut();
                  setUserLogin(!userLogin);
                }}
                to="/login"
                className="lg:text-lg font-bold text-black transition hover:underline hover:text-[#48CAB2]"
              >
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="lg:text-lg font-bold text-black transition hover:underline hover:text-[#48CAB2]"
              >
                Login
              </Link>
            )}
            {user ? null : (
              <Link
                to="/register"
                className="lg:text-lg ml-4 font-bold text-black transition hover:underline hover:text-[#48CAB2]"
              >
                Register
              </Link>
            )}
          </div>
          <div className="ml-4">
            {user && (
              <div className="flex flex-col justify-center items-center">
                <div className="pb-2">
                  <img
                    className="rounded-full w-10"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <div className="text-center border-t-2">{user.displayName}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
