import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ id }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3031/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  const categoryList = categories.filter((category) => category.id == id);


  return (
    <div>
      
    </div>
  );
};

export default Products;
