import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleCategoCourse = (props) => {
  const courses = props.course;
  return (
    <div className="course">
      <div>
        <img src={courses.image_url} alt="" />
      </div>
      <div className="buttom-cart">
        <h6>{courses.title}</h6>
        <div className="icon-price">
          <div>
            <FaStar className="star"></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar className="star"></FaStar>
          </div>
          <p className="price">{courses.price}</p>
        </div>
        <div className="name-start">
          <p>{courses.name} Course</p>
          <p>Start {courses.start}</p>
        </div>
        <button className="detals-btn">
          <Link className="detals-link" to={`/detalscourse/${courses._id}`}>
            Show Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SingleCategoCourse;
