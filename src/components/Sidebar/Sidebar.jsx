import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="#programs">
        Programs
      </a>
      <a className="menu-item" href="#benefits">
        Benefits
      </a>
      <a className="menu-item" href="#pricing">
        Pricing
      </a>
      <a className="menu-item" href="#testimonials">
        Testimonials
      </a>
      <a className="menu-item" href="#join-us">
        Contact Us
      </a>
    </Menu>
  )
}

export default Sidebar