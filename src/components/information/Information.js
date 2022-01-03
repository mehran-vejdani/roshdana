import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import "./inf.css";
import ielts from "../images/ielts.png";
const Information = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="informationIE col-12 d-flex">
        <div className="txtside text-white">
          <div className="container pt-5  col-lg-7  ">
            <div className="topTitle ">
              <h4 className="text-white">این همان عنوان مطالب است</h4>
            </div>
            <div className="moretxt pt-3">
              این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری
              ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد
              ...
            </div>

            <Collapse in={open}>
              <div id="example-collapse-text">
                دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ
                کاربرد دیگری ندارد
              </div>
            </Collapse>
            <button
              className="btn btn-outline-light mt-4 rounded-pill px-4 my-3"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              بیشتر بدانید
            </button>
          </div>
        </div>

        <div className="logoside  col-sm-6 p-5">
          <img src={ielts} alt="logo" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Information;
