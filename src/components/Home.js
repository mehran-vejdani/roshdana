import React from "react";

//َComponents
import TopHeader from "./topheader";
import Header from "./header";
import Information from "./information";
import Explan from "./explanation";
import Courses from "./courses";
//end Components

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Information />
      <Explan />
      <Courses />
    </div>
  );
};

export default Home;
