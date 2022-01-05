import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import ielts from "../../.././images/ielts.png";
import Accordion from "react-bootstrap/Accordion";
const Information = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className=" col-12 d-flex flex-column me-2">
        <div className="logoside  p-5 my-3">
          <img src={ielts} alt="logo" className="img-fluid" />
        </div>
        <div className="txtside text-white">
          <div className="container  p-4 ">
            <div className=" ">
              <h4 className="text-white">این همان عنوان مطالب است</h4>
            </div>
            <div className=" pt-3">
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
        <div className="content  my-5 ">
          <Accordion className="container">
            <h3>یک فهرست</h3>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                این یک متن آزمایشی برای تست جانمایی متون است
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>وهیچ کاربرد دیگری ندارد</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                این یک متن آزمایشی برای تست جانمایی متون است
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>وهیچ کاربرد دیگری ندارد</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Information;
