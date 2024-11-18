import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isHeaderColorActive, setIsHeaderColorActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderColorActive(false);
      } else {
        setIsHeaderColorActive(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Router>
      <Layout
        isHeaderColorActive={isHeaderColorActive}
      />
    </Router>
  );
}

export default App;
