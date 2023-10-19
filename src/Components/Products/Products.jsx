import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  const { brandName } = useParams();
  // Access the brand name from the route

  // Now you can use the brandName in your Products component
  console.log("Brand Name from route:", brandName);

  const filterBrand = products.filter(
    (product) => product.brand.toLowerCase() === brandName.toLowerCase()
  );
  console.log("data matched", filterBrand);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        {filterBrand.map((product) => (
          <div key={product._id}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
