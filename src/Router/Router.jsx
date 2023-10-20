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
import Register from "../Components/Register/Register";
import PrivateRoute from "../Layout/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
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
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);

export default router;
