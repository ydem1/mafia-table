import React from 'react';

import './about.scss';

export const About: React.FC = () => {
  return (
    <section className="home-page__about about">
      <div className="container">
        <div className="about__content">
          <h1>What about us ?</h1>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Commodi aspernatur necessitatibus
            aperiam obcaecati unde, quos, qui magnam nisi voluptatum
            doloremque nihil sapiente architecto quam alias! Iste
            voluptates voluptate at pariatur?
          </p>
        </div>
      </div>
    </section>
  );
};
