import React, { useEffect } from 'react';
import Typed from 'typed.js';
import "./homePage.css";
import me from "./images/me.jpg";
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
          <img src={me} alt="Marine Alaverdyan" className="homePageMe" />
        </div>
        <div className='myInfo'>
          <h3>Hello, <span className='typer'></span></h3>
          <h4>Programmer</h4>
          <p>Address: Armenia</p>
          <p>Email: alaverdyanmarine@gmail.com</p>
          <p>Phone: +(374)-94-18-66-15</p>
          </div>
      </div>
      <AboutMePage />
      <SkillsPage />
      <Contact />
    </div>
  );
};

export default HomePage;
