import React from "react";

import "./inf.css";
import ielts from "../images/ielts.png";
const Information = () => {
  return (
    <div>
      <div className="informationIE">
        <div className="txtside text-white">
          <div className="container pt-5  col-lg-7 ">
            <div className="topTitle ">
              <h4 className="text-white">این همان عنوان مطالب است</h4>
            </div>
            <div className="moretxt pt-3">
              این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری
              ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد
              دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ
              کاربرد دیگری ندارد.
            </div>
            <div className="btn btn-outline-light mt-4 rounded-pill px-4">
              بیشتر بدانید
            </div>
          </div>
        </div>

        <div className="logoside col-6 p-5">
          <img src={ielts} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Information;
