import React from "react";
import "./Smallfooter.css";
import { FaTwitter } from "react-icons/fa";
const Smallfooter = () => {
  return (
    <div className="small-footer">
      <div className="twit">
        <FaTwitter></FaTwitter>
        <small>8 years ago</small>
      </div>

      <p>iAcademay@gmail.com</p>
    </div>
  );
};

export default Smallfooter;
