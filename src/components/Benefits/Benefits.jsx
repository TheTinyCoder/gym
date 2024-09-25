import React from 'react';
import './Benefits.css';
import image1 from '../../assets/image8.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Benefits = () => {
  return (
    <div className='benefits' id='benefits'>
        <div className='left-b'>
            <img id='img1' src={image1} alt=''/>
            <img id='img2' src={image5} alt=''/>
            <img id='img3' src={image6} alt=''/>
            <img id='img4' src={image7} alt=''/>
        </div>
        <div className='right-b'>
          <h3>WHY <span>CHOOSE </span>US?</h3>
          <div className='benefit'>
            <img src={tick} alt=''/>
            <p>Over 140+ expert coaches</p>
          </div>
          <div className='benefit'>
            <img src={tick} alt=''/>
            <p>train smarter and faster than before</p>
          </div>
          <div className='benefit'>
            <img src={tick} alt=''/>
            <p>1 free program for new members</p>
          </div>
          <div className='benefit'>
            <img src={tick} alt=''/>
            <p>reliable partners</p>
          </div>
          <div className='partners'>
            <img src={nb} alt=''/>
            <img src={adidas} alt=''/>
            <img src={nike} alt=''/>
          </div>
        </div>
    </div>
  )
}

export default Benefits