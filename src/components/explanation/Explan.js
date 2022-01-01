import React, { useState, useEffect } from "react";
import { Collapse, Card } from "react-bootstrap";
import "./explan.css";
import axios from "axios";
const Explan = () => {
  const [open, setOpen] = useState(false);
  const baseURL = "http://localhost:3001/ExplaningCard";
  const [cardList, setCardList] = useState([]);
  const GetCards = async () => {
    await axios({
      method: "GET",
      url: baseURL,
    })
      .then((res) => {
        console.log(res.data);
        setCardList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    GetCards();
  }, []);
  return (
    <div>
      <div className="header">
        <div className=" container headtitle pt-5 text-white">
          <h4 className="text-white">آخرین دوره های آیلتس ایز</h4>
          <p className="pt-3">چرا باید آیلتس ایز را انتخاب کنم؟</p>
          <div id="border"></div>
        </div>
        <div className="topExplan container d-flex pt-4 flex-wrap">
          {cardList.map((item, key) => (
            <>
              <img src={item.cardIcon} alt="icon" className="cardIcon" />
              <Card
                key={item.id}
                className="cardcolor me-3 mb-5"
                style={{ backgroundColor: "#688345" }}
              >
                <Card.Header> {item.headerText}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    {item.mainText}
                    <Collapse in={open}>
                      <div id="example-collapse-text">{item.moreText}</div>
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
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explan;
