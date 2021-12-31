import React from "react";
import { Card } from "react-bootstrap";
import "./reason.css";
const Reasons = () => {
  return (
    <div>
      <div className="reasonheader">
        <div className=" container headtitle pt-5 ">
          <h4>چرا آیلتس ایز؟</h4>
          <p className="pt-3">چرا باید آیلتس ایز را انتخاب کنم؟</p>
          <div id="border"></div>
        </div>
        <div className="reason container d-flex pt-4">
          <Card className="reason">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
