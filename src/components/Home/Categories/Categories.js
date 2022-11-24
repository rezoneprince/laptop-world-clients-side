import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
      <Category />
      <Category />
      <Category />
    </div>
  );
};

export default Categories;
