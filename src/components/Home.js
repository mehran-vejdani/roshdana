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
} from "./index";
//end Components

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Information />
      <Explan />
      <Courses />
      <Reasons />
      <Colleague />
      <Course2 />
    </div>
  );
};

export default Home;
