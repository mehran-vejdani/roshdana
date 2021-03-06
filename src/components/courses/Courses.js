import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./courses.css";
import { FaClock, FaUserAlt } from "react-icons/fa";
const Courses = () => {
  const baseURL = "http://localhost:3001/CourseCard";
  const [courseList, setCourseList] = useState([]);
  const GetCourse = async () => {
    await axios({
      method: "GET",
      url: baseURL,
    })
      .then((res) => {
        console.log(res.data);
        setCourseList(res.data);
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
      <div className="courseheader">
        <div className=" container headtitle pt-5 text-white">
          <h4 className="text-white">آخرین دوره های آیلتس ایز</h4>
          <p className="pt-3">چرا باید آیلتس ایز را انتخاب کنم؟</p>
          <div id="border"></div>
        </div>
        <div className="courses container d-flex pt-4 justify-content-between pb-4">
          {courseList.map((item, key) => (
            <Card className="course" key={item.id}>
              <Card.Img variant="top" src={item.courseimg} />
              <Card.Body>
                <Card.Title>{item.coursetxt} </Card.Title>
                <Card.Text>
                  <FaUserAlt />
                  {item.courseteacher}
                </Card.Text>
              </Card.Body>
              <div className="d-flex  justify-content-between align-items-center bg-light">
                <Card.Footer className="me-1">
                  <FaClock />
                  {item.coursetime}
                </Card.Footer>

                <div className="btn btn-secondary">{item.courseprice}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
