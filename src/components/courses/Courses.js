import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./courses.css";
const Courses = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="courseheader">
        <div className=" container headtitle pt-5 text-white">
          <h4 className="text-white">آخرین دوره های آیلتس ایز</h4>
          <p className="pt-3">چرا باید آیلتس ایز را انتخاب کنم؟</p>
          <div id="border"></div>
        </div>
        <div className="courses container d-flex pt-4">
          <Card className="course">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
