import React from "react";
import { Col, Row } from "react-bootstrap";
import "./BigFooter.css";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
const BigFooter = () => {
  return (
    <div className="big">
      <Row className="bigfooter-container">
        <Col lg="3" className="footer-logo">
          <div className="logo-para">
            <img id="log" src={logo} alt="" />
            <p>iAcademy</p>
          </div>

          <p id="logo-text">
            iAcademy online course sit amet consectetur adipisicing elit. Est
            praesentium iure illo quod.
          </p>
        </Col>
        <Col lg="3" className="footer-about">
          <p>About iAcademy</p>
          <Link className="academy-link">About Us</Link>
          <Link className="academy-link">Our Staff</Link>
          <Link className="academy-link">Our Partner</Link>
          <Link className="academy-link">Careee</Link>
        </Col>
        <Col lg="3" className="footer-program">
          <p>Programs</p>
          <Link className="academy-link">Long terms programs</Link>
          <Link className="academy-link">Intensive Programs</Link>
          <Link className="academy-link">Specialized Programme</Link>
          <Link className="academy-link">Computer programing</Link>
        </Col>
        <Col lg="3" className="footer-contact">
          <p>Contact Info</p>
          <Link className="academy-link">iacademy.onlinecourse@gmail.com</Link>
          <Link className="academy-link">00-0188259154</Link>
        </Col>
      </Row>
    </div>
  );
};

export default BigFooter;
