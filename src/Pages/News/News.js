import React from 'react';
import './News.css'
import { BsArrowRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import blog1 from '../../Assets/Images/blog4.jpg';
import blog2 from '../../Assets/Images/blog5.jpg';
import { Link } from 'react-router-dom';
const News = () => {
    return (
        <div>
            <div className="blog-container" id='nesw-main' >
            <div className="blog" id='blog-news'>
        <div className="blog-img" id='news-img'>
           <img src={blog1} alt='not found'/>
           <div className="top-tap">
           <h6>25 AUG</h6>
        </div>
        </div>
        <div className="blog-text" id='news-text'>
          <div className="bloger-name">
            <p>Marry Wilson</p>
            <p><RxDotFilled className="partner"></RxDotFilled>For partners</p>
          </div>
          <div>
          <h5 className="how-start">How to start learning as a beginner?</h5>
          <p>Mass communication has led to modern marketing strategies to continue focusing on brand awareness, large distributions and heavy promotions. The The goal of a promotion is then to reach the most people possible in a time efficient and a cost efficient manner. The fast-paced environment of digital media presents new methods for promotion to utilize new tools now available through technology. With the rise of technological advances, promotions can be done outside of local contexts and across geographic borders to reach a greater number of potential consumers.
          </p>
          <p>You can purchase and buy ad space as well as potential customer interactions stores as Likes, Followers, and clicks to your page with the use of third parties.</p>

        <Link className="read-blog-btn" to='/'>Read More <BsArrowRight></BsArrowRight> </Link>
          </div>
        </div>
      </div>
            </div>
            <div className='news-container'>
                <h4 className='related'>Related news</h4>
                <div className='newss'>
                    <div className='news'>
                        <div className='news-img'>
                            <img src={blog1} alt=''/>
                        </div>
                        <div className='news-text'>
                            <div className="bloger-name">
                                <p>
                                <RxDotFilled className='dot'></RxDotFilled>
                                February 2, 2020
                                </p>
                                <p>
                                <RxDotFilled className='dot'></RxDotFilled>
                                Marry Wilson
                                </p>
                            </div>
                            <div>
                                <h5>Website development without programming</h5>
                            <p>Mass communication has led to modern marketing strategies to continue focusing on brand awareness, large distributions and heavy <RxDotFilled></RxDotFilled> <RxDotFilled></RxDotFilled> <RxDotFilled></RxDotFilled></p>
                            <Link className="read-blog-btn" to='/blog'>Read More <BsArrowRight></BsArrowRight></Link>
                            </div>

                        </div>
                    </div>
                    <div className='news' id='news'>
                        <div className='news-img'>
                            <img src={blog2} alt=''/>
                        </div>
                        <div className='news-text'>
                            <div className="bloger-name">
                                <p>
                                <RxDotFilled className='dot'></RxDotFilled>
                                February 2, 2020
                                </p>
                                <p>
                                <RxDotFilled className='dot'></RxDotFilled>
                                Marry Wilson
                                </p>
                            </div>
                            <div>
                                <h5>Website development without programming</h5>
                            <p>Mass communication has led to modern marketing strategies to continue focusing on brand awareness, large distributions and heavy <RxDotFilled></RxDotFilled> <RxDotFilled></RxDotFilled> <RxDotFilled></RxDotFilled></p>
                            <Link className="read-blog-btn" to='/blog'>Read More <BsArrowRight></BsArrowRight></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;