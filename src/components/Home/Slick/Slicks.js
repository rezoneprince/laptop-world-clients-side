import React from "react";
import SlickItem from "./SlickItem";

const Slicks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 mx-20">
      <SlickItem />
      <SlickItem />
      <SlickItem />
      <SlickItem />
    </div>
  );
};

export default Slicks;
