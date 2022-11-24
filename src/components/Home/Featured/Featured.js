import React from "react";
import FeaturedItems from "./FeaturedItems";

const Featured = () => {
  return (
    <div>
      <div className="mt-10">
        <h3 className="text-center text-4xl font-bold">Featured Items</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-5">
        <FeaturedItems />
        <FeaturedItems />
        <FeaturedItems />
      </div>
    </div>
  );
};

export default Featured;
