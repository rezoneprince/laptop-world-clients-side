import React from "react";

const SlickItem = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="px-2 pt-2">
        <img
          src="https://placeimg.com/60/60/arch"
          className="rounded-full"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Free Shopping</h2>
        <p>Order over $50</p>
      </div>
    </div>
  );
};

export default SlickItem;
