import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo_.png';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <hr/>
        <div className='footer-icons'>
            <img src={Github} alt=''/>
            <img src={Instagram} alt=''/>
            <img src={LinkedIn} alt=''/>
        </div>
        <div className='footer-logo'>
            <img src={Logo} alt=''/>
        </div>
    </div>
  )
}

export default Footer