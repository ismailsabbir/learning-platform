import React from 'react';
import './Contact.css'
import { GrMapLocation } from "react-icons/gr";
import {FcSmartphoneTablet } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <div className='contact-type-cont'>
                <div className='contact1'>
                    <GrMapLocation className='visit'></GrMapLocation>
                    <h6>Visit Us</h6>
                    <p>27 Data St, New York,</p>
                    <p> NY 10002, USA</p>
                </div>
                <div className='contact1'>
                    <FcSmartphoneTablet className='visit'></FcSmartphoneTablet>
                    <h6>Visit Us</h6>
                   <p>+1 800-310-1011</p>
                   <p>+1 800-310-1012</p>
                </div>
                <div className='contact1'>
                    <FaMailBulk className='visit'></FaMailBulk>
                    <h6>Visit Us</h6>
                    <p>iacademy@gmail.com</p>
                    <p>admin@gmail.com</p>
                </div>
            </div>
            <div className='message-box-cont'>
            <div className='form-div'>
            <form>
                    <div className='name-email-phon'>
                    <input className='name' type='text' placeholder='Your Name' required/>
                    <input className='name' type='tel' placeholder='Your Phone Number' required/>
                    <input className='name' type='email' placeholder='Your Email' required/>
                    </div>
                    <div className='message'>
                    <input type='text' placeholder='Message' required/>
                    </div>
                    <button className='mess-sent-btn'>Submit message</button>
                </form>
            </div>

            </div>
            <div className='map-container'>

    
            </div>
        </div>
    );
};

export default Contact;