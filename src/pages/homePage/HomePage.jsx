import React, { useEffect } from 'react';
import Typed from 'typed.js';
import "./homePage.css";
import photo from "../images/photo.jpg";
import AboutMePage from '../aboutMePage/AboutMePage';
import SkillsPage from '../skillsPage/SkillsPage';
import Contact from '../contactPage/Contact';

const HomePage = () => {
  useEffect(() => {
    const typed = new Typed('.typer', {
      strings: [`I'm Marine Alaverdyan.`],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="allPage">
      <div className='homeCard'>
        <div className='contacts'>
          <img src={photo} alt="Marine Alaverdyan" className="profile-pic" />
        </div>
        <div className='myInfo'>
          <h3>Hello, <span className='typer'></span></h3>
          <h4>Programmer</h4>
          <p>Address: Armenia</p>
          <p>Email: alaverdyanmarine14@gmail.com</p>
          <p>I'm a Junior FrontEnd developer</p>
          <input type="file" />
        </div>
      </div>
      <AboutMePage />
      <SkillsPage />
      <Contact />
    </div>
  );
};

export default HomePage;
