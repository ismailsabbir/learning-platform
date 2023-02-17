import React from "react";
// import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Singlecourse from "../Singlecourse/Singlecourse";
import "./Allcourse.css";
const Allcourses = () => {
  const allcourse = useLoaderData();
  return (
    <div>
      <div className="course-container">
        {allcourse.map((courses) => (
          <Singlecourse course={courses}></Singlecourse>
        ))}
      </div>
    </div>
  );
};

export default Allcourses;
