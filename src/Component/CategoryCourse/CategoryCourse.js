import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategoCourse from "../SingleCategoCourse/SingleCategoCourse";
// import Singlecourse from "../Singlecourse/Singlecourse";
import "./CategoryCourse.css";
const CategoryCourse = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="course-container">
      {courses.map((course) => (
        <SingleCategoCourse course={course}></SingleCategoCourse>
      ))}
    </div>
  );
};

export default CategoryCourse;
