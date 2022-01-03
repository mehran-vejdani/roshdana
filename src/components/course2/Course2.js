import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./course2.css";
import { FaClock } from "react-icons/fa";
const Course2 = () => {
  const baseURL = "http://localhost:3001/MoreCourse";
  const [morecours, setMoreCourse] = useState([]);
  const GetCourse = async () => {
    await axios({
      method: "GET",
      url: baseURL,
    })
      .then((res) => {
        console.log(res.data);
        setMoreCourse(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    GetCourse();
  }, []);
  return (
    <div>
      <div className="coursebox">
        <div className=" container headtitle pt-5 text-white">
          <h4 className="text-white">آخرین دوره های آیلتس ایز</h4>
          <div className="d-flex justify-content-between">
            <p className="pt-3">چرا باید آیلتس ایز را انتخاب کنم؟</p>
            <div className="btn btn-outline-light rounded-pill pt-3 ">
              نمایش همه مطالب
            </div>
          </div>
          <div id="border"></div>
        </div>
        {/* ------ */}
        <div className="coursebox container d-flex pt-4 justify-content-between pb-4">
          {morecours.map((item, key) => (
            <Card className="course" key={item.id}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.subject} </Card.Title>
                <Card.Text>{item.title}</Card.Text>
                <FaClock /> {item.time}
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course2;
