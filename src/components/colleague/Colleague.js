import React from "react";
import logo from "../images/logobrand.png";
const Colleague = () => {
  return (
    <div>
      <div className="colleagueheader">
        <div className=" container headtitle pt-5">
          <h4> همکاران ما</h4>
          <p className="pt-3">بهترین کادر آموزشی برای فرزندان شما</p>
          <div id="border"></div>
        </div>
        <div>
          <div className="colleaguelogo container d-flex flex-wrap justify-content-between p-4">
            <img src={logo} alt="logo brand" />
            <img src={logo} alt="logo brand" />
            <img src={logo} alt="logo brand" />
            <img src={logo} alt="logo brand" />
            <img src={logo} alt="logo brand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleague;
