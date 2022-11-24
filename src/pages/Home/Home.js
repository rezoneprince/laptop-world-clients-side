import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import Categories from "../../components/Home/Categories/Categories";
import Featured from "../../components/Home/Featured/Featured";
import Slicks from "../../components/Home/Slick/Slicks";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Featured />
      <Slicks />
    </div>
  );
};

export default Home;
