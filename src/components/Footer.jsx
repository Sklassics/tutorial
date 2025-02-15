import React from 'react';
// import './Footer.css';
import logo from '../assets/sklassicslogo.svg';

const Footer = () => {
    return (
      <footer className="footer">
        <img
          src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png"
          alt="logo"
          width="250px"
          height="50px"
        />
        <div className="footer-container">
          {/* <!-- Contact Details --> */}

          <div className="contact-details" style={{paddingLeft:"1rem"}}>
            {/* <h4>Contact Us</h4> */}

            <div className="brand-name">
              <h1>Contact US</h1>
            </div>
            <p>Phone: +91 9392732341</p>
            <p>
              Email:{" "}
              <a href="mailto:info@sklassics.com">sklassictutor@gmail.com</a>
            </p>
            <p>
              Address: 7-1-414/1, Sri Swarupam Apartments, Ameerpet - 500016
            </p>
          </div>

          {/* <!-- Footer Links --> */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Plaform</h4>
              <ul>
                <li>
                  <a href="">Plans and Pricing</a>
                </li>
                <li>
                  <a href="">Personal AI Manager</a>
                </li>
                <li>
                  <a href="">AI Business Writer</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="">Documentation</a>
                </li>
                <li>
                  <a href="">Papers</a>
                </li>
                <li>
                  <a href="">Press Conferences</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        {/* <!-- Bottom Bar --> */}
        <div className="footer-bar">
          <div className="footer-copyright">
            <p className="copyright">&#169; 2024 Sklassics</p>
          </div>
          <div className="footer-lower">
            <p className="Terms of Service">
              <a href="">Terms of Service</a>
            </p>
            <p className="privacy-policy">
              <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
