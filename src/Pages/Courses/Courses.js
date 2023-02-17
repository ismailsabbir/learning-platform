import React from "react";
import { useLoaderData } from "react-router-dom";
import Singlecourse from "../../Component/Singlecourse/Singlecourse";
import "./Courses.css";
const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="course-container">
      {courses.map((course) => (
        <Singlecourse course={course}></Singlecourse>
      ))}
    </div>
  );
};
export default Courses;
