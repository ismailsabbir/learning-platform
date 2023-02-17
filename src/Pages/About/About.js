import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";
import image from '../../Assets/Images/man.avif'
import { AiOutlineStar,AiOutlinePrinter,AiOutlineFileText } from "react-icons/ai";
import { BiRocket,BiLike,BiCoffee } from "react-icons/bi";
import { useLoaderData } from 'react-router-dom';
import Instructor from "../../Component/Instructor/Instructor";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const About = () => {
  const course=useLoaderData();
  // console.log(course);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <div className="about-container">
        <h4 className="about-text">About iacademy Online program</h4>
        <Row>
          <Col className="about1" lg='4'>
            <div className="left-about">
              <div className="stars"><AiOutlineStar></AiOutlineStar></div>
              <div className="about-right-text">
              <h5>Over 20 Years of Experience</h5>
              <p>In 2000 our centre became an academic department within the school of languages.</p>
              </div>
            </div>
            <div className="left-about">
              <div className="stars"><AiOutlinePrinter></AiOutlinePrinter></div>
              <div className="about-right-text">
              <h5>Exclusive Learning Materials</h5>
              <p>Our learning materials include text with multimedia on all areas of the curriculum.</p>
              </div>
            </div>
            <div className="left-about">
              <div className="stars"><BiRocket></BiRocket></div>
              <div className="about-right-text">
              <h5>Career Upgrade</h5>
              <p>In 2000 our centre became an academic department within the school of languages.</p>
              </div>
            </div>
          </Col>
          <Col className="about1" id="mid" lg='4'>
            <div className="mid">
            <img src={image} alt="" />
            </div>
          </Col>
          <Col className="about1" lg='4'>
          <div className="left-about" id="right-about">
              <div id="right-star" className="stars"><AiOutlineFileText></AiOutlineFileText></div>
              <div className="about-right-text">
              <h5>Certification</h5>
              <p>At the end of course you will get the certificate and valuable skills and experience.</p>
              </div>
            </div>
            <div className="left-about" id="right-about">
              <div id="right-star" className="stars"><BiCoffee></BiCoffee></div>
              <div className="about-right-text">
              <h5> Learning Environment</h5>
              <p>Our method based on learning a language in a friendly and open atmosphere.</p>
              </div>
            </div>
            <div className="left-about" id="right-about">
              <div id="right-star" className="stars"><BiLike></BiLike></div>
              <div className="about-right-text">
              <h5>Professional Teachers</h5>
              <p>Our team consist of high-quality and certified teachers with big experience.</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="black-programing-cont">
        <div className="bpl">
          <h4>Intensive iAcademy Development Program</h4>
          <p>for International Students</p>
        </div>
        <div className="bpr">
        <button>Learn more</button>
        </div>
      </div>
      
      <div className="instructor-container">
      <h5 className="instruc-texs">Our Instructors</h5>
      <Carousel responsive={responsive} className="hole-instructor">
      {
        course.map((courses)=>(
         <Instructor data={courses}></Instructor>
      ))
    }
      </Carousel>;

      </div>

    </div>
  );
};

export default About;
