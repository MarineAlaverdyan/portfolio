import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <div className='contactPage'>
      <h1>Contact</h1>
      <div className='contactBlock'>
        <div className='contactInfo'>
          <h2>Get In Touch</h2>
          <p>
            I'm currently seeking job opportunities and look forward to receiving your suggestions.
          </p>
          <ul>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>alaverdyanmarine14@gmail.com</span>
            </li>
            <li>
              <i className="fa-solid fa-map-marker-alt"></i>
              <span>Ejmiatsin, Armenia</span>
            </li>
          </ul>
          <div className='socialMedia'>
            <h3>Connect with me</h3>
            <a href="https://www.linkedin.com/in/marine-alaverdyan-a36597238" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://t.me/MarineAlaverdyan" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://github.com/MarineAlaverdyan" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
