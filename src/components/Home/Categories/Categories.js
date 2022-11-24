import React from "react";

const Categories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
      {/* category 1 */}
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/100/100/arch"
            alt="Shoes"
            className="rounded-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Apple</h2>
        </div>
      </div>
      {/* category 2 */}
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/100/100/arch"
            alt="Shoes"
            className="rounded-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">HP</h2>
        </div>
      </div>
      {/* category 3 */}
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/100/100/arch"
            alt="Shoes"
            className="rounded-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Lenovo</h2>
        </div>
      </div>
    </div>
  );
};

export default Categories;
