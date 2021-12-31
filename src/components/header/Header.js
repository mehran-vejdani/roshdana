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
      <div className="backgroung">
        <Container fluid>
          <div className="abouthead container">
            <div className="imgbox">
              <img src={ielts} alt="IeltsLogo" className="img" />
              <p className="sublogo">
                ما برای پیدا کردن نیازهای خود همکاری میکنیم.
              </p>
            </div>
            <div className="menu">
              <Nav />
            </div>
          </div>
          <div className="titles">
            <HeaderText />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
