import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/homePage/HomePage';
import Contact from '../pages/contactPage/Contact';
import SkillsPage from '../pages/skillsPage/SkillsPage';
import AboutMePage from '../pages/aboutMePage/AboutMePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="aboutMe" element={<AboutMePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="contactPage" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
