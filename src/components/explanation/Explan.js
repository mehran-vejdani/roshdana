import React, { useState } from "react";
import { Collapse, Button, Card } from "react-bootstrap";
import "./explan.css";
const Explan = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="header">
        <div className=" container headtitle pt-5 text-white">
          <h4 className="text-white">آخرین دوره های آیلتس ایز</h4>
          <p className="pt-3">چرا باید آیلتس ایز را انتخاب کنم؟</p>
          <div id="border"></div>
        </div>
        <div className="topExplan container d-flex pt-4">
          <img src="" alt="icon" />
          <Card className="cardSize">
            <Card.Header>این همان عنوان مطالب است</Card.Header>
            <Card.Body>
              <Card.Text>
                این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری
                ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و
                    هیچ کاربرد دیگری ندارد
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
              </Card.Text>
            </Card.Body>
          </Card>
          <img src="" alt="icon" />
          <Card className="cardSize">
            <Card.Header>این همان عنوان مطالب است</Card.Header>
            <Card.Body>
              <Card.Text>
                این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری
                ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و
                    هیچ کاربرد دیگری ندارد
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
              </Card.Text>
            </Card.Body>
          </Card>
          <img src="" alt="icon" />
          <Card className="cardSize">
            <Card.Header>این همان عنوان مطالب است</Card.Header>
            <Card.Body>
              <Card.Text>
                این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری
                ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و
                    هیچ کاربرد دیگری ندارد
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
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Explan;
