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
    <div className="w-[80vw] mx-auto text-black">
      <p className="text-4xl font-bold mt-10 mb-14 text-center">
        Chic and Stylish: The Fashion and Apparel Collection
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
        {collections.map((collection) => (
          <div className="text-center" key={collection.id}>
            <div className="w-full h-auto transition-transform transform hover:scale-105">
              <img className="w-[60vw]" src={collection.image} alt="" />
              <p className="text-2xl font-bold mt-5">{collection.name}</p>
              <p>Quantity: {collection.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
