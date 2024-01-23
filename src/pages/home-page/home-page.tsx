import React from 'react';
import './home-page.scss';

import { Poster } from './home-poster';
import { About } from './home-about';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Poster />
      <About />
    </div>
  );
};
