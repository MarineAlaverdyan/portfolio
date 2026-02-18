import React from 'react';
import NavigationMenu from '../components/navigationMenu/NavigationMenu';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import './layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <NavigationMenu />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
