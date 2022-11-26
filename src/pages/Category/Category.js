import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../../components/Category/Products/Products";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Category = () => {
  const { name, img } = useLoaderData();

  const { title } = useContext(AuthContext);

  title("Category");
  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Category: {name}</h1>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Category;
