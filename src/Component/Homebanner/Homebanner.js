import React from "react";
import "./Homebanner.css";
import Carousel from "react-bootstrap/Carousel";
import imge from "../../Assets/Images/home5.webp";
import img1 from "../../Assets/Images/home6.jpg";
import imge3 from "../../Assets/Images/home11.jpg";
const HomeBanner = () => {
  return (
    <div className="home-banner-container">
      <Carousel className="carousel-cont">
        <Carousel.Item interval={5000} className="carousel-item">
          <img className="d-block w-100" src={imge} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <h2>Specialized Training</h2>
            <p>Enhance the Learning Potential.</p>
            <div>
              <input className="search" placeholder="Search Hear"></input>
              <button className="search-btn">Search</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000} className="carousel-item">
          <img className="d-block w-100" src={img1} alt="Second slide" />
          <Carousel.Caption className="carousel-caption">
            <h2>Specialized Training</h2>
            <p>Enhance the Learning Potential.</p>
            <div>
              <input className="search" placeholder="Search Hear"></input>
              <button className="search-btn">Search</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            id="img3"
            src={imge3}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h2>Specialized Training</h2>
            <p>Enhance the Learning Potential.</p>
            <div>
              <input className="search" placeholder="Search Hear"></input>
              <button className="search-btn">Search</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
