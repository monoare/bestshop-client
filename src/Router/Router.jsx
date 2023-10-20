import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/HomePage/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import Login from "../Components/Login/Login";
import Brands from "../Components/BrandNames/Brands";
import Products from "../Components/Products/Products";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import UpdateProduct from "../Components/Update/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/brands/:id",
        element: <Brands></Brands>,
      },
      {
        path: "/allProducts/:brandName",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);

export default router;
