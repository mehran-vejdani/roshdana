import React from "react";
import "./info.css";
import { Container } from "react-bootstrap";
import {
  AiOutlinePhone,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
const TopHeader = () => {
  return (
    <div>
      <div className="information">
        <div className="container d-flex justify-content-between">
          <div className="number">
            <p>
              {" "}
              <AiOutlinePhone /> تلفن : 09153085282
            </p>
          </div>
          <div className="menubar">
            <div className="menu">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link link-light hover">میز راهنما</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-light hover">منابع ما</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-light hover">ثبت نام</a>
                </li>
              </ul>
            </div>
            <div className="icons">
              <AiOutlineInstagram />
              <AiFillTwitterCircle className="mx-2" />
              <AiFillFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
