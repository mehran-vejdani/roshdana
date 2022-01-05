import React from "react";
import logo1 from "../images/logobrand1.png";
import logo2 from "../images/logobrand2.png";
import logo3 from "../images/logobrand3.png";
import logo4 from "../images/logobrand4.png";
import logo5 from "../images/logobrand5.png";
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
            <img src={logo1} alt="logo brand" />
            <img src={logo2} alt="logo brand" />
            <img src={logo3} alt="logo brand" />
            <img src={logo4} alt="logo brand" />
            <img src={logo5} alt="logo brand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleague;
