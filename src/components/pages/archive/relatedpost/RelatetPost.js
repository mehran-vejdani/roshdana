import React from "react";
import "./related.css";
import pic1 from "../../../images/pic1.png";
import pic2 from "../../../images/pic2.png";
const RelatetPost = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h3 className="titlebg text-light p-2">مطالب مرتبط</h3>
        </div>
        <div className="card mb-3 col-7">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={pic1} alt="" className="pic1" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">عنوان این خبر اینجا قرار میگیرد</h5>
                <p className="card-text">
                  دو خط توضیح کوتاه در مورد این خبر در اینجا قرار می گیرد دو خط
                  توضیح کوتاه در مورد این خبر در اینجا قرار می گیرد دو خط توضیح
                  کوتاه در مورد این خبر در اینجا قرار می گیرد
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    25 خرداد 1398 | ادامه خبر ...
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 col-7">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={pic2} alt="" className="pic1" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">عنوان این خبر اینجا قرار میگیرد</h5>
                <p className="card-text">
                  دو خط توضیح کوتاه در مورد این خبر در اینجا قرار می گیرد دو خط
                  توضیح کوتاه در مورد این خبر در اینجا قرار می گیرد دو خط توضیح
                  کوتاه در مورد این خبر در اینجا قرار می گیرد
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    25 خرداد 1398 | ادامه خبر ...
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatetPost;
