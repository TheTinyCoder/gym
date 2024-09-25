import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import Barbels from '../../assets/barbels.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';


const Hero = () => {
    const transition = {type: 'spring', duration: 5};
    const mobile = window.innerWidth <=678? true: false;
    const tab = window.innerWidth <=992 && window.innerWidth >678 ? true: false;
  return (
    <div className="hero" id='hero'>
        <div className='blur hero-blur'></div>
        <div className='left'>
            <Header></Header>
            <section className='best'>
                <motion.div
                    initial={{left: mobile?'130px': (tab?'300px':'350px')}}
                    whileInView={{left:'0px'}}
                    transition={{...transition, type:"tween"}}
                ></motion.div>
                <span>THE BEST FITNESS CLUB IN TOWN</span>
            </section>
            <section className='hero-text'>
                <div>
                    <span className='stroke-text'>SHAPE </span>
                    <span>YOUR</span>
                </div>
                <div>
                    <span>IDEAL BODY</span>
                </div>
                <div>
                    <span>We will help you to shape your ideal body & build a healthy lifestyle</span>
                </div>
            </section>
            <section className='figures'>
                <div>
                    <span id='figure1'>
                        <NumberCounter end={140} start= {0} delay="6" preFix="+" />
                    </span>
                    <span>EXPERT COACHES</span>
                </div>
                <div>
                    <span id='figure2'>
                        <NumberCounter end={978} start= {0} delay="6" preFix="+" />
                    </span>
                    <span>MEMBERS JOINED</span>
                </div>
                <div>
                    <span id='figure3'>
                        <NumberCounter end={50} start= {0} delay="6" preFix="+" />
                    </span>
                    <span>FITNESS PROGRAMS</span>
                </div>
            </section>
            <section className='hero-buttons'>
                <div><button className='hbtn1 btn' type='button'>Get Started</button></div>
                <div><button className='hbtn2 btn' type='button'>Learn More</button></div>
            </section>
        </div>
        <div className='right'>
            <img src={Barbels} alt =""/>
        </div>
    </div>
  )
}

export default Hero