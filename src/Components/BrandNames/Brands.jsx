import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  // Move the handleBrand function outside of useEffect
  const handleBrand = (brandName) => {
    console.log(brandName);
  };

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {brands.map((brand) => (
        <div key={brand.id} className="brand-container">
          <div
            className="hero shadow-lg bg-slate-200 border"
            style={{
              backgroundImage: `url(${brand.image})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-content h-1/2 text-center">
              <div className="max-w-md">
                <h1
                  className={`mb-5 text-5xl text-blue-500 font-bold  ${
                    brand.id % 2 === 1
                      ? "hover:underline hover:rotate-6 hover:text-violet-800"
                      : "hover:underline hover:-rotate-6 hover:text-green-600"
                  }`}
                >
                  {brand.brand}
                </h1>
                <p className="mb-5 text-center text-green-500 text-sm font-bold hover:text-lg">
                  {brand.unique_title}
                </p>

                <Link
                  to={`/allProducts/${brand.brand}`}
                  onClick={() => handleBrand(brand.brand)}
                >
                  <AwesomeButton type="secondary" size="medium">
                    {brand.button}
                  </AwesomeButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;
