import Products from "@/components/Products";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("1001");

  useEffect(() => {
    axios
      .get("http://localhost:3031/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-[calc(100vh-48px)] overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-neutral-300 scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-md">
      <div className="p-4 max-w-6xl mx-auto mt-8">
        <h1 className="text-2xl font-serif w-fit mx-auto">Category</h1>
        <div className="w-full flex items-center justify-evenly flex-wrap my-16">
          {categories.map((category) => {
            return (
              <div
                onClick={() => setSelectCategory(`${category.id}`)}
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
        <div className="w-full bg-neutral-100 rounded-lg">
          <Products id={selectCategory} />
        </div>
      </div>
    </div>
  );
};

export default Category;
