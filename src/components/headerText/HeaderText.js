import React from "react";
import { Container, Button } from "react-bootstrap";
import "./headerText.css";
const HeaderText = () => {
  return (
    <div>
      <Container>
        <div className="topText">
          <h1>
            {" "}
            ما مردم را <br />
            با یک دیگر <span className="marktext">متحد میکنیم.</span>
          </h1>
        </div>
        <div className="paragraph col-6">
          <p>
            مفهوم یک شرکت مشاوره مدیریت درنیویورک است که متخصص در ساخت مدل سازی
            اطلاعات است.
          </p>
        </div>
        <button className="btn-light rounded-pill p-3 text-warning m-3 ">
          شروع کنید
        </button>
      </Container>
    </div>
  );
};

export default HeaderText;
