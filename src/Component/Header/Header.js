import React, { useContext } from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../Assets/Images/logo.png";
import { Authcontext } from "../../Context/UserContext";
import { HiOutlineLogout,HiUserCircle } from "react-icons/hi";
import DarkMode from "../DarkMode/DarkMode";
const Header = () => {
  const{user,logout}=useContext(Authcontext);
  const handlelogout=()=>{
    logout()
    .then(()=>{
      console.log('log out');
    })
    .catch((error)=>{
      console.error(error);
    })
  }
  const showinformation=()=>{
console.log(user.email);
  }
  // var body = document.getElementsByTagName('divs')[0];
  // body.style.backgroundColor = 'green';
  // window.onscroll = function (event) {
  //   var scroll = window.pageYOffset;
  //   if (scroll < 300) {
  //     // green
  //     body.style.backgroundColor = 'yellow';
  // } 
  // }
  return (
    <divs className="header-container">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/home" className="logo-link">
            <Navbar.Brand className="logo-div">
              <img className="logo" src={logo} alt="" />
              <h4>iAcademy</h4>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                id="item"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                id="item"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                id="item"
                to="/courses"
              >
                Course
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                id="item"
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                id="item"
                to="/news"
              >
                News
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                id="item"
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
            <DarkMode></DarkMode>
            {
              user?.uid?<button onClick={handlelogout} className='logout'>Log Out <HiOutlineLogout></HiOutlineLogout></button> :<></>
            }
            {
              user?.email && <span className="user-name">{user.displayName}<Link><HiUserCircle onClick={showinformation} className="user"></HiUserCircle></Link></span>
            }
            
 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </divs>
  );
};

export default Header;
