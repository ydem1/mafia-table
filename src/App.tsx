import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { TABLE_MIN_WIDTH } from './shared/constans/constans';

import { HomePage } from './pages/home-page';
import { About } from './pages/about-page';
import { NotFound } from './pages/not-found-page';
import { Menu } from './shared/components/menu';
import { Header } from './shared/components/header';
import { ScoreboardPage } from './scoreboard-page';
import { UserPage } from './pages/user-page';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= TABLE_MIN_WIDTH) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header openMenu={() => setIsMenuOpen(true)} />

      <main className="main">
        {isMenuOpen && <Menu closeMenu={() => setIsMenuOpen(false)} />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scoreboard" element={<ScoreboardPage />} />
          <Route
            path="/scoreboard/user/:userId"
            element={<UserPage />}
          />

          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};
