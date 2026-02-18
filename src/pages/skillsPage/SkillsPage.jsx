import React, { useEffect, useState } from 'react';
import "./SkillsPageCss.css";
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
          <h1 className="text-center fw-bold main-title">My Skills</h1>
        </div>
        <div className="skillsBox">
          {skillData.map((skill) => (
            <div key={skill.id} className='skill'>
              <i className={skill.i}></i>
              {skill.id === 6 && <SiRedux className='redux' />}
              <p>{skill.title}</p>
              <div className="progress-bar">
                <span style={{ width: `${skill.progress}%` }}>{skill.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
