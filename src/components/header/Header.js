import React from "react";
//componnets
import Nav from "../navb";
import HeaderText from "../headerText";
//endComponents
import "./Header.css";
import ielts from "../images/ielts.png";
import { Container } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <div className="backgroung ">
        <Container fluid>
          <div className="abouthead container d-flex justify-content-between">
            <div className="imgbox mt-5">
              <img src={ielts} alt="IeltsLogo" className="img img-fluid" />
              <p className="sublogo d-flex  mt-5">
                <div id="border"></div>
                ما برای پیدا کردن نیازهای خود همکاری میکنیم.
              </p>
            </div>
            <div className="menu">
              <Nav />
            </div>
          </div>
          <div className="titles mt-2">
            <HeaderText />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
