import React from "react";
import Products from "../../components/Category/Products/Products";

const Category = () => {
  return (
    <div>
      <div
        className="hero"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Category: Apple</h1>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Category;
