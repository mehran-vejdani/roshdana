import React from "react";
//component
import { Courses, Colleague, ArchiveHeader, Ielts } from "../..";
//endcomponent
const Archive = () => {
  return (
    <div>
      <ArchiveHeader />
      <Ielts />
      <Courses />
      <Colleague />
    </div>
  );
};

export default Archive;
