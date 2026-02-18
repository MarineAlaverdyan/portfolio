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
              <i className="fa-solid fa-phone"></i>
              <span>+374-94-18-66-15</span>
            </li>
            <li>
              <i className="fa-solid fa-map-marker-alt"></i>
              <span>Parakar, Armenia</span>
            </li>
          </ul>
          <div className='socialMedia'>
            <h3>Connect with me</h3>
            <a href="https://www.linkedin.com/in/marine-alaverdyan-a36597238" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://t.me/stoicgg" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://github.com/your-github-handle" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.tiktok.com/@stoic_pubgm?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
