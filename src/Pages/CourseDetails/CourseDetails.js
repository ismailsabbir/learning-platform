import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CourseDetails.css";
import { Link } from "react-router-dom";
// import Pdf from "react-to-pdf";
const CourseDetails = () => {
  const course = useLoaderData();
  const {
    // image_url,
    // price,
    start,
    end,
    classe,
    orientation,
    video,
    project,
    assignment,
    cariculam,
    specialty,
  } = course;
  console.log(course);
  return (
    <div>
      {/* <div className="buy-cart">
        <img src={image_url} alt="" />
        <p>Price {price}</p>
        <button className="buy-btn">Buy Now</button>
      </div> */}
      <div className="schedule">
        <h5>Next Batch Schedule</h5>
        <div className="schedule-con">
          <div className="enrol-ore">
            <p>Enrollment Starts : {start}</p>
            <p>Orientation Starts:{orientation}</p>
          </div>
          <div className="enrol-class">
            <p>Enrollment Ends:{end}</p>
            <p>Class Starts:{classe}</p>
          </div>
        </div>
      </div>
      <div className="what-learn">
        <h5>What You Will Learn_ From This Course?</h5>
        <div className="what-learn-con">
          <div className="learn">
            <div className="part">
              <h5>{video} Video</h5>
            </div>
            <div className="part">
              <h5>{project} Project</h5>
            </div>
            <div className="part">
              <h5>{assignment} Assignment</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="cariculam">
        <h4>Course Curriculum</h4>
        <div className="cariculam-con">
          {cariculam.map((cari) => (
            <div className="cariculam-div">
              <Link className="cari-link">{cari}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="specials">
        <h4>What Is The Specialty_ Of This Course?</h4>
        <div className="special-con">
          <div className="special">
            {specialty.map((special) => (
              <div className="specil-name">
                <h6>{special} </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="access-container">
      <Link className="access-link" to='/enrollnow'><button>Get premium access</button></Link>
        
      </div>
    </div>
  );
};
export default CourseDetails;
