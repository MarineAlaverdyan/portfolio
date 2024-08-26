import React, { useEffect, useState } from 'react';
import me from '../images/me.jpg';
import './aboutMePage.css';

const AboutMePage = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3005/aboutMe');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='aboutMe'>
      <div className='myimg'>
        <img src={me} alt="Marine Alaverdyan" className='profile-pic' />
      </div>
      <div className='aboutSection'>
        <h1>About Me</h1>
        <p className='aboutMeText'>
          I'm a Junior Frontend Developer with experience in HTML, CSS,
          SASS, JavaScript, React, and Redux. During my internship, I
          developed a website for a mobile store, focusing on a
          responsive and user-friendly design.
        </p>
        <div className='statistics'>

          <div className='stat-item'>
            <p>3+</p>
            <p>Courses</p>
          </div>
          <div className='stat-item'>
            <p>7+</p>
            <p>Tools</p>
          </div> <div className='stat-item'>
            <p>Education</p>
            <p>SmartCode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
