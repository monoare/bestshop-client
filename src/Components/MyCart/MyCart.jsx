import { useLoaderData } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadCarts = useLoaderData();
  const [carts, setCarts] = useState(loadCarts);

  console.log(carts);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://best-shop-server-1ilrmtj1v-monoare-hossains-projects.vercel.app/cart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remainingCarts = carts.filter((cart) => cart._id !== id);
              setCarts(remainingCarts);
              console.log(remainingCarts);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="mb-10 md:mt-10">
        <Navbar></Navbar>
      </div>
      <div className="overflow-x-auto md:mx-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-black text-xs md:text-lg">
                <th>Serial</th>
                <th>Image</th>
                <th>Brand</th>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {carts.map((cart, id) => (
              <tbody key={cart._id}>
                {/* rows */}
                <tr>
                  <td>{id + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cart.image1}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="font-medium text-xs md:text-lg">
                    {cart.brand}
                  </td>
                  <td className="capitalize text-xs md:text-lg">{cart.name}</td>
                  <td>{cart.type}</td>
                  <td className="font-bold text-xs md:text-lg">
                    ${cart.price}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(cart._id)}
                      className="btn btn-warning btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
