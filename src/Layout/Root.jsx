import { Outlet } from "react-router-dom";
import Navbar from "../Components/HomePage/Navbar/Navbar";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
