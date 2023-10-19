import { useLoaderData } from "react-router-dom";

const Products = ({ brands }) => {
  const products = useLoaderData();

  return (
    <div>
      <p>Products: </p>
    </div>
  );
};

export default Products;
