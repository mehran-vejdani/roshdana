import React from "react";
import "./archive.css";
import ielts from "../../../images/ielts.png";
const ArchiveHeader = () => {
  return (
    <div>
      <div className="archivebg  ">
        <div className="container d-flex justify-content-between">
          <div className=" mt-5">
            <p className=" d-flex  mt-5 text-success h2">
              عنوان این مطلب در این بالا قرار میگیره و می تونه دراز باشه
            </p>
            <p className="mt-4 text-success">
              دسته بندی: مطالب آیلتس / 28 اذر 1398
            </p>
            <div className="d-flex mb-4 ">
              <div className="box"></div>
              <div className="box mx-3"></div>
              <div className="box"></div>
            </div>
          </div>
          <div className=" m-3">
            <img
              src={ielts}
              alt="IeltsLogo"
              className="archiveimg img-fluid p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveHeader;
