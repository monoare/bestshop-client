import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/Visa.png";
import mastercard from "../../assets/master.jpg";
import discover from "../../assets/Discover.png";
import americanExpress from "../../assets/american-express.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-yellow-100 w-full mx-auto pt-10 pb-8 md:pb-20">
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-14 text-black mx-4">
        <div className="space-y-2 mx-auto text-center md:text-left">
          <h2 className="text-lg  font-bold pb-2">Info</h2>
          <p>About Us</p>
          <p>Shipping and Returns</p>
          <p>Contact Us</p>
          <p>404 Page</p>
          <p>Maintenance</p>
        </div>

        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-lg font-bold pb-2">Our Policies</h2>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Terms and Conditions</p>
        </div>

        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-lg font-bold pb-2">Order</h2>nodemon index.js
          <p>My Account</p>
          <p>View Bag</p>
          <p>Wishlist</p>
          <p>Compare</p>
        </div>

        <div className="w-64 mx-auto text-center md:text-left">
          <h2 className="text-lg font-bold pb-4">Store</h2>
          <p className="pb-6">
            2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United
            States of America
          </p>
          <p>
            Call Us:
            <span className="font-bold"> 1&minus;234&minus;5678901</span>
          </p>
          <p>Mon-Sun: 9:00am &minus; 9:00pm</p>
        </div>

        <div className="w-64 mx-auto text-center md:text-left space-y-2">
          <h2 className="md:text-lg font-bold pb-2">
            Subscribe to Our Newsletter!
          </h2>
          <div className="flex justify-center items-center">
            <input
              type="email"
              name="email"
              id=""
              className="border p-2 font-bold w-full md:text-lg "
              placeholder="Your email address"
            />
            <AiOutlineMail className="text-3xl -ml-10"></AiOutlineMail>
          </div>
          <p>
            By entering your email, you agree to our Terms of Service and
            Privacy Policy.
          </p>
          <div className="flex justify-center md:justify-start items-center">
            <p className="text-lg font-bold mr-2">Follow Us:</p>
            <div className="flex items-center mt-2">
              <Link className="mr-4">
                <FaFacebookF className="text-2xl opacity-50 rounded hover:bg-blue-500" />
              </Link>
              <Link className="mr-4">
                <FaInstagram className="text-2xl opacity-50 rounded hover:bg-red-500" />
              </Link>
              <Link>
                <FaPinterestP className="text-2xl opacity-50 rounded hover:bg-orange-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-black pt-5">
          &copy; 2023 Best Shop website. All Rights Reserved by Monoare.
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-5">
          <img className="w-[70px] h-[50px] md:mr-4" src={paypal} alt="" />
          <img className="w-[70px] h-[20px]md:mr-4" src={visa} alt="" />
          <img className="w-[70px] h-[50px] md:mr-4" src={mastercard} alt="" />
          <img className="w-[50px] h-[30px] md:mr-4" src={discover} alt="" />
          <img className="w-[60px] h-[40px]" src={americanExpress} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
