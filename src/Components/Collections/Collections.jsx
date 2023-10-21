import { useEffect } from "react";
import { useState } from "react";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("/collection.json")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);

  return (
    <div className="w-[90vw] mx-auto text-black">
      <p className="text-xl md:text-4xl font-bold mt-10 mb-14 text-center">
        Chic and Stylish: The Fashion and Apparel Collection
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:gap-10">
        {collections.map((collection) => (
          <div className="mx-auto" key={collection.id}>
            <div className="max-w-fit mb-5 h-auto transition-transform transform hover:scale-105">
              <img className="md:w-[60vw]" src={collection.image} alt="" />
              <p className="md:text-2xl font-bold text-center mt-5">
                {collection.name}
              </p>
              <p className="text-center">Quantity: {collection.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
