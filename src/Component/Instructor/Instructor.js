import React from 'react';
import './Instructor.css'
import 'react-multi-carousel/lib/styles.css';
// import { RouterProvider } from 'react-router-dom';
const Instructor = (props) => {
    const coursei=props.data;
    console.log(coursei)
    return (
        <div className='ind-instructor'>
            <img src={coursei.author.img} alt='not found'/>
            <div className='name-pos'>
            <h6>{coursei.author.name}</h6>
            <p>{coursei.author.position}</p>
            </div>

            <p>{coursei.author.study} , {coursei.author.study1}</p>
            <p className='prog'>Programing iAcademy</p>
            <p></p>
            <button>Instructor Detals</button>
        </div>
    );
};

export default Instructor;