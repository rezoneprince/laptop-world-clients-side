import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <Link to="/category/id">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/90/90/arch"
            alt="Shoes"
            className="rounded-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Apple</h2>
        </div>
      </div>
    </Link>
  );
};

export default Category;
