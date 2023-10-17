import { Outlet } from "react-router-dom";
import Navbar from "../Components/HomePage/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
