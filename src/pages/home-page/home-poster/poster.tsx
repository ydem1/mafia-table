import React from 'react';

import './poster.scss';

export const Poster: React.FC = () => {
  return (
    <section className="home-page__poster poster">
      <div className="container">
        <div className="poster__content">
          <img
            src="./img/home/mafia-poster.gif"
            alt="mafia"
            className="poster__img"
          />
        </div>
      </div>
    </section>
  );
};
