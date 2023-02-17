import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound-container'>
            <div className='notfound'>
                <h4>Page not found !!!</h4>
                <p>Why don't you try one of these pages instead?</p>
                <button><Link className='notfound-link' to='/'>Go back Home page</Link></button>
                <button><Link className='notfound-link' to='/contact'>Contact with us</Link></button>
                
            </div>
        </div>
    );
};

export default NotFound;