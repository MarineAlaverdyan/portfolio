import React, { useEffect, useState } from 'react';
import "./SkillsPageCss.css";
import { SiRedux } from "react-icons/si";

const SkillsPage = () => {
  const skillData= [
     {
            "id": 1,
            "i": "fa-brands fa-html5",
            "title": "HTML",
            "progress": 85
        },
        {
            "id": 2,
            "i": "fa-brands fa-css3-alt",
            "title": "CSS",
            "progress": 85
        },
        {
            "id": 3,
            "i": "fa-brands fa-sass",
            "title": "SASS",
            "progress": 85
        },
        {
            "id": 4,
            "i": "fa-brands fa-js",
            "title": "JavaScript",
            "progress": 90
        },
        {
            "id": 5,
            "i": "fa-brands fa-react",
            "title": "React  ",
            "progress": 92
        },
        {
            "id": 6,
            "img": " <SiReduxs/>",
            "title": "Redux",
            "progress": 92
        },
        {
            "id": 7,
            "i": "fa-brands fa-github",
            "title": "GitHub",
            "progress": 50
        },
         {
            "id": 8,
            "i": "fa-solid fa-c",
            "title": "C Programming"
        },
         {
            "id": 9,
            "i": "/images/after-effects.png",
            "title": "After Effect"
        },
         {
            "id": 10,
            "i": "/images/icons8-blender-3d-50.png",
            "title": "Blender"
        }
  ];

 
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
