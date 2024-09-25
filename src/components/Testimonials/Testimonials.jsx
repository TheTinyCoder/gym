import React from 'react';
import './Testimonials.css';
import {testimonialsData} from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import {motion} from 'framer-motion';

const Testimonials = () => {
    const transition = {type: 'spring', duration: 5};
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const length = testimonialsData.length;

  return (
    <div className='testimonials' id='testimonials'>
        <div className='left-t'>
            <h3>Testimonials</h3>
            <p>What they say about us</p>
            <motion.p
            key={currentSlide}
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:100}}
                transition={transition}
            >{testimonialsData[currentSlide].review}</motion.p>
            <div className='t-name'>
                <span>{testimonialsData[currentSlide].name}</span> <br/>
                <span>- {testimonialsData[currentSlide].status}</span>
            </div>
        </div>
        <div className='right-t'>
            <div></div>
            <div></div>
            <div className='arrows'>
                <img onClick={()=> {currentSlide===0 ? setCurrentSlide(length - 1):setCurrentSlide(currentSlide - 1)}} src={leftArrow} alt=""/>
                <img onClick={()=> {currentSlide===(length-1) ? setCurrentSlide(0):setCurrentSlide(currentSlide + 1)}} src={rightArrow} alt=""/>
            </div>
            <div className='user-pic'>
                <motion.div
                    initial={{opacity:0, x:-100}}
                    transition={{...transition,duration:3}}
                    whileInView={{opacity:1, x:0}}
                ></motion.div>
                <motion.img
                key={currentSlide}
                    initial={{opacity:0, x:-100}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:100}}
                    transition={transition}
                 src={testimonialsData[currentSlide].image} alt=''/>
                <motion.div
                    initial={{opacity:0, x:100}}
                    transition={{...transition,duration:3}}
                    whileInView={{opacity:1, x:0}}
                ></motion.div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials