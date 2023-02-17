import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { FaUserGraduate, FaMale, FaBraille } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { AiOutlineMessage } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import news1 from "../../Assets/Images/news1.jpg";
import news2 from "../../Assets/Images/news2.jpg";
import news3 from "../../Assets/Images/news3.jpg";
import news4 from "../../Assets/Images/news4.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const calenders={
  border:"none"
}
const Home = () => {
  const catrgories = useLoaderData();
  console.log(catrgories);
  const [date, setdate] = useState(new Date());
  const onChange = (date) => {
    setdate(date);
  };
  const dest = new Date("oct 3, 2023 10:00:00").getTime();
  var x = setInterval(function () {
    const now = new Date().getTime();
    var diff = dest - now;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // console.log(days, hours);
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secound = Math.floor((diff % (1000 * 60)) / 1000);
    // console.log(minutes, secound);
    document.getElementById("dates").innerHTML =days + "d:" + hours + "h:" + minutes + "m:" + secound + "s";
  }, 1000);
  const student=document.getElementById("student");
  const counter1=document.querySelector(".count1");
  const counter2=document.querySelector(".count2");
  const counter3=document.querySelector(".count3");
  let count=0;
  let count1=0
  let count2=0;
  let count3=0;
setInterval(()=>{
  
  if(count<=800){
  count++;
  student.innerText=count;
  }
},10);
setInterval(()=>{
  
  if(count1<=100){
  count1++;
  counter1.innerText=count1;
  }
},100);
setInterval(()=>{
  
  if(count2<=8){
  count2++;
  counter2.innerText=count2;
  }
},1000)
setInterval(()=>{
  
  if(count3<=12){
  count3++;
counter3.innerText=count3;
  }
},1000)

  return (
    <div>
      <div className="course-types" id="home-course-type">
        {catrgories.map((category) => (
          <p>
            <Link
              className={({ isActive }) => (isActive ? "active" : undefined)}
              id="course-categori"
              to={`/category-course/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>

      <div className="find-course-cont">
        <div>
          <Row className="find-course-row">
            <Col className="find-course-news" id="news-home" lg="3">
              <h5>School News</h5>{" "}
              <p className="newss-text">
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Pro vel nibh et elit mollis commodo et nec augue tristique sed
              </p>
              <Link className="readmore-btn">Read more</Link>
              {/* <button >Read more---</button> */}
            </Col>
            <Col className="find-course-news" id="time" lg="3">
              <h5>Opening Hours</h5>
              <p>Monday - Friday8.00 - 17.00</p>
              <p>Saturday9.30 - 17.30</p>
              <p>Monday - Friday8.00 - 17.00</p>
            </Col>
            <Col className="find-course-news" id="find" lg="6">
              <h5>Find your course</h5>
              <div className="input-field">
                <div className="form-name">
                  <form>
                    {/* <label for="HTML"></label> */}
                    <select id="HTML" name="HTML">
                      <option value="HTML">HTML</option>
                      <option value="CSS">CSS</option>
                      <option value="Bootstrap">Bootstrap</option>
                      <option value="Javascript">Javascript</option>
                      <option value="React">React js</option>
                    </select>
                  </form>
                  <input type="text" placeholder="Enter Name" />
                </div>
                <div className="phone-email">
                  <input
                    type="phone"
                    name=""
                    id="input1"
                    placeholder="Phone number"
                  />
                  <input type="email" placeholder="Email Address" id="input2" />
                </div>
                <div className="date-button">
                  <input type="date" name="" id="" />
                  <button>Send Message</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="black-banner-con">
        <div>
          <h4 className="black-baner">iAcademy Programing Course</h4>
          <Row className="banner-con">
            <Col className="student" lg="3">
              <FaUserGraduate className="student-icon"></FaUserGraduate>
              <h4 id="student">0</h4>
              <h5>Student</h5>
            </Col>
            <Col className="student" lg="3">
              <FaMale className="student-icon"></FaMale>
              <h4 className="count1">0</h4>
              <h5>Instructors</h5>
            </Col>
            <Col className="student" lg="3">
              <FaBraille className="student-icon"></FaBraille>
              <h4 className="count2">0</h4>
              <h5>Branch</h5>
            </Col>
            <Col className="student" lg="3">
              <ImLibrary className="student-icon"></ImLibrary>
              <h4 className="count3">0</h4>
              <h5>Lerning Program</h5>
            </Col>
          </Row>
        </div>
      </div>

      <div className="subscribe-cont">
        <h4>Subscribe to our Newsletter</h4>
        <div className="email-sub">
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="latest-news-hole">
        <h4>Latest News</h4>
        <div className="latest-news-cont">
          <Row>
            <Col className="news1" lg="6">
              <div className="news1-detal">
                <div className="left-news-img">
                  <img src={news1} alt="" />
                </div>
                <div className="=right-news-text" id="right">
                  <h6>
                    EFFECTIVE LECTURING <br /> SKILLS IN ENGLISH
                  </h6>{" "}
                  <p>
                    {" "}
                    Temporibus autem quibusdam <br /> et aut officiis debitis{" "}
                    <br />
                    aut rerum
                  </p>
                  <div className="mess-num-con">
                    <p className="steven">by Steven Master</p>
                    <div className="mess-num">
                      <p>0</p>
                      <AiOutlineMessage></AiOutlineMessage>
                    </div>
                  </div>
                  <div className="fav-num-con">
                    <p className="steven">in Advices, News</p>
                    <div className="fav-num">
                      <p>45</p>
                      <MdFavoriteBorder></MdFavoriteBorder>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="news1" lg="6">
              <div className="news1-detal">
                <div className="left-news-img">
                  <img src={news2} alt="" />
                </div>
                <div className="=right-news-text" id="right">
                  <h6>
                    EFFECTIVE LECTURING <br /> SKILLS IN ENGLISH
                  </h6>{" "}
                  <p>
                    {" "}
                    Temporibus autem quibusdam <br /> et aut officiis debitis{" "}
                    <br />
                    aut rerum
                  </p>
                  <div className="mess-num-con">
                    <p className="steven">by Steven Master </p>
                    <div className="mess-num">
                      <p>0</p>
                      <AiOutlineMessage></AiOutlineMessage>
                    </div>
                  </div>
                  <div className="fav-num-con">
                    <p className="steven">in Advices, News</p>
                    <div className="fav-num">
                      <p>45</p>
                      <MdFavoriteBorder></MdFavoriteBorder>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="news1" lg="6">
              <div className="news1-detal" id="news3">
                <div className="left-news-img" id="news3-img">
                  <img src={news3} alt="" />
                </div>
                <div className="=right-news-text" id="right">
                  <h6>
                    EFFECTIVE LECTURING <br /> SKILLS IN ENGLISH
                  </h6>{" "}
                  <p>
                    {" "}
                    Temporibus autem quibusdam <br /> et aut officiis debitis{" "}
                    <br />
                    aut rerum
                  </p>
                  <div className="mess-num-con">
                    <p className="steven">by Steven Master </p>
                    <div className="mess-num">
                      <p>0</p>
                      <AiOutlineMessage></AiOutlineMessage>
                    </div>
                  </div>
                  <div className="fav-num-con">
                    <p className="steven">in Advices, News</p>
                    <div className="fav-num">
                      <p>45</p>
                      <MdFavoriteBorder></MdFavoriteBorder>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="news1" lg="6">
              <div className="news1-detal" id="news4">
                <div className="left-news-img" id="news3-img">
                  <img src={news4} alt="" />
                </div>
                <div className="=right-news-text" id="right">
                  <h6>
                    EFFECTIVE LECTURING <br /> SKILLS IN ENGLISH
                  </h6>{" "}
                  <p>
                    {" "}
                    Temporibus autem quibusdam <br /> et aut officiis debitis{" "}
                    <br />
                    aut rerum
                  </p>
                  <div className="mess-num-con">
                    <p className="steven">by Steven Master </p>
                    <div className="mess-num">
                      <p>0</p>
                      <AiOutlineMessage></AiOutlineMessage>
                    </div>
                  </div>
                  <div className="fav-num-con">
                    <p className="steven">in Advices, News</p>
                    <div className="fav-num">
                      <p>45</p>
                      <MdFavoriteBorder></MdFavoriteBorder>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="event-course-cal">
        <Row className="event-course-hole">
          <Col lg="4" className="calender" id="tarik">
            <h5>Events Calendar</h5>
            <Calendar id='calen' className={calenders} onChange={onChange} value={date} />
          </Col>
          <Col lg="4" className="calender">
            <h5>Latest Events</h5>
            <div>
              <div className="event1">
                <div className="event-left">15 Octc</div>
                <div className="event-right">
                  <h6>OCTOBER 15, 2023 10:00 - APRIL 7, 2025 17:00</h6>
                  <p>HTML Design Templete</p>
                  <p>Javascript Web page</p>
                </div>
              </div>
              <div className="event1">
                <div className="event-left">15 Octc</div>
                <div className="event-right">
                  <h6>OCTOBER 15, 2023 10:00 - APRIL 7, 2025 17:00</h6>
                  <p>HTML Design Templete</p>
                  <p>Javascript Web page</p>
                </div>
              </div>
              <div className="event1">
                <div className="event-left">15 Octc</div>
                <div className="event-right">
                  <h6>OCTOBER 15, 2023 10:00 - APRIL 7, 2025 17:00</h6>
                  <p>HTML Design Templete</p>
                  <p>Javascript Web page</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" className="calender">
            <h5>Upcoming Courses</h5>
            <div>
              <div className="course1">
                <h6>Full Stack development course</h6>
                <p>OCTOBER 15, 2023 10:00 - APRIL 7, 2025 17:00</p>
              </div>
              <div className="course1">
                <h6>Full Stack development course</h6>
                <p>OCTOBER 15, 2023 10:00 - APRIL 7, 2025 17:00</p>
              </div>
              <div className="course1">
                <h6>Full Stack development course</h6>
                <p>OCTOBER 15, 2023 10:00 - APRIL 7, 2025 17:00</p>
              </div>
              <p>See our full course timetable and select the time you want</p>
              <p className="readmore">Read more---</p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="next-cont">
        <div className="next">
          <Row className="next-row">
            <Col className="next-course" lg="2">
              <div className="next-course-img">
                <img src={news2} alt="" />
              </div>
            </Col>
            <Col className="next-course" lg="3">
              <div className="next-start">
                <h4>Next Course Starting</h4>
                <p>BECOME A MEMBER TODAY</p>
              </div>
            </Col>
            <Col className="next-course" lg="3">
              <div className="mid-text">
                <h6>iAcademy TRAININGS: EFFICIENT NEGOTIATING</h6>
                <p id="dates"></p>
                {/* <p >{days} days:{hours} hour:{minutes} min:{secound} s</p> */}
              </div>
            </Col>
            <Col className="next-course" lg="2" id="btn">
              <Link className="see-link" to="/">
                See More
              </Link>
            </Col>
          </Row>
        </div>
      </div>
      <div className="instrouctor-cont"></div>
    </div>
  );
};
export default Home;
