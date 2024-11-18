import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './';

function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'Travel Nepal',
    };

    document.title = `${pageTitles[location.pathname] || 'Unknown Page'}`;
  }, [location]);
}

function Layout({ isHeaderColorActive }) {
  usePageTitle();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Layout;
