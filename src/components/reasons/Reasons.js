import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./reason.css";
import axios from "axios";
const Reasons = () => {
  const baseURL = "http://localhost:3001/ReasonsCard";
  const [reasonList, setReasonList] = useState([]);
  const GetReason = async () => {
    await axios({
      method: "GET",
      url: baseURL,
    })
      .then((res) => {
        console.log(res.data);
        setReasonList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    GetReason();
  }, []);
  return (
    <div>
      <div className="reasonheader">
        <div className=" container headtitle pt-5 ">
          <h4>چرا آیلتس ایز؟</h4>
          <p className="pt-3">چرا باید آیلتس ایز را انتخاب کنم؟</p>
          <div id="border"></div>
        </div>
        <div className="reason container d-flex pt-4">
          {reasonList.map((item, key) => (
            <Card
              className="reason d-flex justify-content-center align-items-center text-center m-3"
              key={item.id}
            >
              <Card.Img
                variant="top"
                src={item.Reasonimg}
                style={{ width: "100px" }}
              />
              <Card.Body>
                <Card.Title>{item.Reasontitle} </Card.Title>
                <Card.Text>{item.Paragraph}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
