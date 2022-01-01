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
    </div>
  );
};

export default Home;
