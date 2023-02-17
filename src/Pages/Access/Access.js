import React from 'react';
import './Access.css';
import bkash from '../../Assets/Images/bkash.png';
import nogod from '../../Assets/Images/nagad.png';
import rocket from '../../Assets/Images/rocket.png';
import vish from '../../Assets/Images/visha1.png';
import { Col, Row } from 'react-bootstrap';
const Access = () => {
    return (
        <div>
        <div className='information-container'>
            <h4>Billing Details</h4>
            <p>Envato collects and uses personal data in accordance with our Privacy Policy. By creating an account, you agree to our Terms and Conditions.</p>
            <form>
            <div className='first-last-name'>
            <label for="fname">First name:</label><br></br>
            <input type="text" id="fname" name="fname" placeholder='Enter first Name'/><br></br>
            <label className='lable' for="lname">Last Name:</label><br/>
            <input type="text" id="lname" name="lname"/>
            </div>

            <label for="fname">Company Name:</label>
            <input type="text" id="company" name="fname"/>

            <label for="fname">Country:</label>
            <input type="text" id="country" name="fname"/>

            <label for="fname">Address line 1*:</label>
            <input type="text" id="adress1" name="fname"/>

            <label for="fname">Address line 2:</label>
            <input type="text" id="address2" name="fname"/>
            <div className='city-address'>
            <div className='city'>
            <label for="fname">city:</label>
            <input type="text" id="fname" name="fname"/>
            </div>
            <div className='city'>
            <label for="fname">State / Province / Region:</label>
            <input type="text" id="fname" name="fname"/>
            </div>

            <div className='city'>
            <label for="fname">Zip / Postal Code:</label>
            <input type="text" id="fname" name="fname"/>
            </div>

            </div>
            <div className='save-btn'>
                <button>Save and continue</button>
            </div>
            </form>
        </div>

        <div className='payment-detals'>
        <h5>Select Payment Method</h5>
        <Row className='payment-typess'>
            <Col className='payment' lg='3'>
                <img src={bkash} alt=''/>
            </Col>
            <Col className='payment' lg='3'>
                <img src={nogod} alt=''/>
            </Col>
            <Col className='payment' lg='3'>
                <img src={rocket} alt=''/>
            </Col>
            <Col className='payment' lg='3'>
                <img src={vish} alt=''/>
            </Col>
        </Row>

        </div>
        </div>

    );
};

export default Access;