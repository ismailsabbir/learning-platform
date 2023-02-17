import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Leftsidevar.css";
import Carousel from 'react-bootstrap/Carousel';
import slid1 from '../../Assets/Images/news1.jpg';
import slid2 from '../../Assets/Images/Learninghome1.jpg';
import slide3 from '../../Assets/Images/news4.jpg'
import Button from 'react-bootstrap/Button';
import img from '../../Assets/Images/home7.webp';
import img1 from '../../Assets/Images/home3.jpg';
import img2 from '../../Assets/Images/news4.jpg';
import img3 from '../../Assets/Images/learninghome4.jpg';
import { Authcontext } from "../../Context/UserContext";
const Leftsidevar = () => {
  const{signupwithgoogle,githubacount}=useContext(Authcontext)
  const [categories, setcategories] = useState([]);
  const signupgoogle=()=>{
    signupwithgoogle()
    .then(req=>{
      const user=req.user;
      console.log(user);
    })
    .catch(error=>{
      console.error(error);
    })
  }
  const githubhandler=()=>{
githubacount()
.then((req)=>{
  const user=req.user;
  console.log(user);
})
.catch((error)=>{
  console.error(error);
})
  }
  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((data) => setcategories(data));
  });
  return (
    <div className="types-course">
    <Button className="register-btn" variant="info"><Link to='/signup' className="link">Sign UP</Link></Button>
    <Button  className="register-btn" variant="primary"><Link to='/login' className="link">Login</Link></Button>
    <Button onClick={signupgoogle}  className="register-btn" variant="outline-primary"><Link className="links">Signup with Google</Link></Button>
    <Button onClick={githubhandler} className="register-btn" variant="outline-danger"><Link className="links">Signup with GitHUb</Link></Button>
  
    <div>
      {categories.map((category) => (
        <p className="course-type">
          <Link
            className={({ isActive }) => (isActive ? "active" : undefined)}
            id="course-categori"
            to={`/course/${category.id}`}
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
    <div className="carousel-container">
    <Carousel>
      <Carousel.Item interval={1000} className='item'>
        <img
          className="d-block w-100"
          src={slid1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>iAcademy Programing</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} id='slide2' className='item'>
        <img
          className="d-block w-100"
          src={slid2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h4>iAcademy Programing</h4>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='item'>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h4>iAcademy Programing</h4>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="left-latest-news">
      <div className="left-news-1">
        <img src={img} alt=""/>
      </div>
      <div className="left-news-1">
        <img src={img1} alt=""/>
      </div>
      <div className="left-news-1">
        <img src={img2} alt=""/>
      </div>
      <div className="left-news-1">
        <img src={img3} alt=""/>
      </div>
      <div className="mid-latest">
        <h5>Latest Progrma</h5>
      </div>
    </div>
   
    </div>

  );
};

export default Leftsidevar;
