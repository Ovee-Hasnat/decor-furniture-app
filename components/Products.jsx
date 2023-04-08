import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ id }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3031/category/${id}`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="flex flex-wrap flex-shrink-0 justify-evenly">
      {categories.products?.map((product) => {
        return (
          <div key={product.id} className="bg-white w-44 p-2 rounded-lg m-2">
            <img
              src="https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
              className="w-full h-52 object-cover rounded-lg mx-auto"
            />
            <h4 className="uppercase tracking-wide text-center text-neutral-700">
              {product.name}
            </h4>
            <p className="text-lg uppercase font-medium tracking-widest text-center">
              ${product.price}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
