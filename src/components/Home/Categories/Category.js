import React from "react";

const Category = () => {
  return (
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
  );
};

export default Category;
