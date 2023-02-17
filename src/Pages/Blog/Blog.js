import React from "react";
import "./Blog.css";
// import { RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';
import blog1 from '../../Assets/Images/blog.jpg';
import blog2 from '../../Assets/Images/blog1.jpg';
import blog3 from '../../Assets/Images/blog2.jpg';
import blog4 from '../../Assets/Images/blog3.jpg'
import { BsArrowRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Blog = () => {
  return <div>
    <div className="blog-container">
      <div className="blog">
        <div className="blog-img">
           <img src={blog1} alt='not found'/>
           <div className="top-tap">
           <h6>25 AUG</h6>
        </div>
        </div>
        <div className="blog-text">
          <div className="bloger-name">
            <p>Marry Wilson</p>
            <p><RxDotFilled className="partner"></RxDotFilled>For partners</p>
          </div>
          <div>
          <h5 className="how-start">How to start learning as a beginner?</h5>
          <p>Mass communication has led to modern marketing strategies to continue focusing on brand awareness, large distributions and heavy promotions. The <RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled>
          </p>
        <Link className="read-blog-btn" to='/'>Read More <BsArrowRight></BsArrowRight> </Link>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="blog-img">
           <img src={blog2} alt='not found'/>
           <div className="top-tap">
           <h6>25 AUG</h6>
        </div>
        </div>
        <div className="blog-text">
          <div className="bloger-name">
            <p>Marry Wilson</p>
            <p><RxDotFilled className="partner"></RxDotFilled>For partners</p>
          </div>
          <div>
          <h5 className="how-start">How to create websites with ease? Let’s start!</h5>
          <p>Digital media, which includes Internet, social networking and social media sites, is a modern way for brands to interact with consumers as it releases news, information and advertising <RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled>
          </p>
        <Link className="read-blog-btn" to='/'>Read More <BsArrowRight></BsArrowRight> </Link>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="blog-img">
           <img src={blog3} alt='not found'/>
           <div className="top-tap">
           <h6>25 AUG</h6>
        </div>
        </div>
        <div className="blog-text">
          <div className="bloger-name">
            <p>Marry Wilson</p>
            <p><RxDotFilled className="partner"></RxDotFilled>For partners</p>
          </div>
          <div>
          <h5 className="how-start">For motivated students and schoolchildren</h5>
          <p>Product refers to what the business offers for sale and may include products or services. Product decisions include the “quality, features, benefits, style, design, branding, packaging,<RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled>
          </p>
        <Link className="read-blog-btn" to='/'>Read More <BsArrowRight></BsArrowRight> </Link>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="blog-img">
           <img src={blog4} alt='not found'/>
           <div className="top-tap">
           <h6>25 AUG</h6>
        </div>
        </div>
        <div className="blog-text">
          <div className="bloger-name">
            <p>Marry Wilson</p>
            <p><RxDotFilled className="partner"></RxDotFilled>For partners</p>
          </div>
          <div>
          <h5 className="how-start">How to start learning as a beginner?</h5>
          <p>Mass communication has led to modern marketing strategies to continue focusing on brand awareness, large distributions and heavy promotions. The <RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled><RxDotFilled></RxDotFilled>
          </p>
        <Link className="read-blog-btn" to='/'>Read More <BsArrowRight></BsArrowRight> </Link>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Blog;
