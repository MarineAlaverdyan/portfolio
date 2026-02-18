import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navigationMenu.css';

const NavigationMenu = () => {
  const barRef = useRef(null);
  const menuRef = useRef(null);

  const showBar = () => {
    menuRef.current.classList.toggle('showMenu');
    barRef.current.classList.toggle('active');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 868) {
        menuRef.current.classList.remove('showMenu');
        barRef.current.classList.remove('active');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <div className='logo'>
        <NavLink to="/"><h2>Alaverdyan Marine</h2></NavLink>
      </div>
      <ul className='menu'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="aboutMe">About Me</NavLink></li>
        <li><NavLink to="skills">Skills</NavLink></li>
        <li><NavLink to="contactPage">Contact</NavLink></li>
      </ul>
      <div className='bar' ref={barRef} onClick={showBar}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className='menuDotShow' ref={menuRef}>
        <ul className='showItem'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="aboutMe">About Me</NavLink></li>
          <li><NavLink to="skills">Skills</NavLink></li>
          <li><NavLink to="contactPage">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;
