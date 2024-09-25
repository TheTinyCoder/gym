import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import right_arrow from '../../assets/rightArrow.png';


const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className='programs-header'>
            <h2>Explore Our Programs</h2>
        </div>
        <div className='program-categories'>
          {programsData.map(program=>(
            <div className='category'>
              <img src={program.image} alt=""/>
              <h3>{program.heading}</h3>
              <p>{program.details}</p>
              <div className='join'>
                <span>Join Now</span>
                <img src={right_arrow} alt=''/>
              </div>
            </div>  
          ))}
        </div>
    </div>
  )
}

export default Programs