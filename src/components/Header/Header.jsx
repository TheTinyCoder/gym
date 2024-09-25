import React from 'react';
import './Header.css';
import Logo from '../../assets/logo1.png';
import Sidebar from '../Sidebar/Sidebar';
import { BrowserRouter as Router} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';


const Header = () => {
  const linkStyle ={
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <Router>
    <div className='header'>
        <img className='logo' src={Logo} alt=""/>
        <ul className='header-menu'>
          <Link style={linkStyle} to="#programs" smooth><li>Programs</li></Link>
          <Link style={linkStyle} to="#benefits" smooth><li>Benefits</li></Link>
          <Link style={linkStyle} to="#pricing" smooth><li>Pricing</li></Link>
          <Link style={linkStyle} to="#testimonials" smooth><li>Testimonials</li></Link>
          <Link style={linkStyle} to="#join-us" smooth><li>Contact Us</li></Link>    
        </ul>
        <Sidebar pageWrapId={'hero'} outerContainerId={'App'}></Sidebar>
    </div>
    </Router>
  )
}

export default Header