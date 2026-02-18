import React, { useEffect, useState } from 'react';
import me from './images/me.jpg';
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
        <h2>About Me</h2>
        <p className='aboutMeText'>
          Hi, I'm Marine,Front-End Developer with a strong foundation in HTML,
CSS, SASS, JavaScript, React, and Redux. I completed the Front-End
Development course at SmartCode and participated in the selection pool at 42
Yerevan, where I strengthened my knowledge of C programming and shell
scripting. I am also self-learning Adobe After Effects and Blender, developing
skills in motion graphics and 3D modeling. I am motivated to grow and
contribute to interesting projects.
        </p>
        <div className='statistics'>
          {aboutData.map((item) => (
            <div key={item.id} className='stat-item'>
              <p>{item.num}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
