import React from "react";

//َComponents

import {
  Reasons,
  TopHeader,
  Header,
  Information,
  Explan,
  Courses,
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
    </div>
  );
};

export default Home;
