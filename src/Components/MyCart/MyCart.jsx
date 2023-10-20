import { useLoaderData } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";

const MyCart = () => {
  const carts = useLoaderData();
  console.log(carts);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="overflow-x-auto mx-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-black text-base">
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
                  <td className="font-medium">{cart.brand}</td>
                  <td className="capitalize">{cart.name}</td>
                  <td>{cart.type}</td>
                  <td className="font-bold">${cart.price}</td>
                  <th>
                    <button className="btn btn-warning btn-xs">Delete</button>
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
