/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import './Navbar.css';

const Nav = ({ scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png"
            alt="logo"
            width="100%"
            height="50px"
          /> 
          
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li onClick={() => scrollToSection("home")}>
            <p>Home</p>
          </li>
          <li onClick={() => scrollToSection("about")}>
            <p>About Us</p>
          </li>
          <li onClick={() => scrollToSection("courses")}>
            <p>Courses</p>
          </li>
          <li onClick={() => scrollToSection("learning")}>
            <p>Learning Centers</p>
          </li>

          <li onClick={() => scrollToSection("Blog")}>
            <p>Blog</p>
          </li>
          <li onClick={() => scrollToSection("contact")}>
            <p className="contact-btn">Contact Us</p>
          </li>
        </ul>
        <div
          className={`hamburger ${isOpen ? "close-hamburger" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    );
};

export default Nav;
