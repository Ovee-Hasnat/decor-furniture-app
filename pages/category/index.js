import Products from "@/components/Products";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("1001");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3031/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  const selectCategoryHandler = (id) => {
    setSelectCategory(id);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-serif w-fit mx-auto">Category</h1>
      <div className="w-full flex items-center justify-evenly flex-wrap my-10">
        {categories.map((category) => {
          return (
            <div
              onClick={() => selectCategoryHandler(`${category.id}`)}
              key={category.id}
              className="cursor-pointer group"
            >
              <img
                src="https://www.freepnglogos.com/uploads/furniture-png/furniture-png-transparent-furniture-images-pluspng-15.png"
                className="w-12 mx-auto group-hover:scale-110 transition-all duration-300 ease-linear"
              />
              <h4 className="font-semibold tracking-widest uppercase text-center">
                {category.name}
              </h4>
            </div>
          );
        })}
      </div>
      <div className="w-full bg-neutral-200">
        <Products id={selectCategory} />
      </div>
    </div>
  );
};

export default Category;
