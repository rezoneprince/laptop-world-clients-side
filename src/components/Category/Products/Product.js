import React from "react";

const Product = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="p-10 ">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between items-center">
          <p>Price: $200 </p>
          <p>Old Price: $200 </p>
          <p>Available: 200 </p>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-outline btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
