import React, { useEffect, useState } from 'react';
import "./SkillsPage.css";
import { SiRedux } from "react-icons/si";

const SkillsPage = () => {
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3005/skills");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSkillData(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <h1>My Skills</h1>
        </div>
        <div className="skillsBox">

          <div className='skill'>
          <i class="fa-brands fa-html5"></i>
          <p>HTML</p>
          <div className="progress-bar">
                <span style={{ width: `80%` }}>80%</span>
              </div>
          </div>

          <div className='skill'>
          <i class="fa-brands fa-css3-alt"></i>
          <p>CSS</p>
          <div className="progress-bar">
                <span style={{ width: `80%` }}>80%</span>
              </div>
          </div>

          <div className='skill'>
          <i class="fa-brands fa-sass"></i>
          <p>SASS</p>
          <div className="progress-bar">
                <span style={{ width: `80%` }}>80%</span>
              </div>
          </div>

          <div className='skill'>
          <i class="fa-brands fa-js"></i>
          <p>JavaScript</p>
          <div className="progress-bar">
                <span style={{ width: `90%` }}>90%</span>
              </div>
          </div>

          <div className='skill'>
          <i class="fa-brands fa-react"></i>
          <p>React</p>
          <div className="progress-bar">
                <span style={{ width: `90%` }}>90%</span>
              </div>
          </div>

          <div className='skill'>
          <SiRedux className='redux' />
          <p>Redux</p>
          <div className="progress-bar">
                <span style={{ width: `90%` }}>90%</span>
              </div>
          </div>

          <div className='skill'>
          <i class="fa-brands fa-git"></i>
          <p>Git</p>
          <div className="progress-bar">
                <span style={{ width: `50%` }}>50%</span>
              </div>
          </div>

          <div className='skill'>
          <i class="fa-brands fa-github"></i>
          <p>GitHub</p>
          <div className="progress-bar">
                <span style={{ width: `50%` }}>50%</span>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
