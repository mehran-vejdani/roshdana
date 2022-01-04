import React from "react";

//َComponents

import {
  Reasons,
  TopHeader,
  Header,
  Information,
  Explan,
  Courses,
  Colleague,
  Course2,
  Footers,
} from "./index";
//end Components

const Home = () => {
  return (
    <div>
      {/* <TopHeader /> */}
      <Header />
      <Information />
      <Explan />
      <Courses />
      <Reasons />
      <Colleague />
      <Course2 />
      {/* <Footers /> */}
    </div>
  );
};

export default Home;
