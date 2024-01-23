import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';
import { Nav } from '../nav';

type Props = {
  openMenu: () => void,
};

export const Header: React.FC<Props> = ({ openMenu }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <NavLink to="/">
            <div className="header__logo icon icon__logo" />
          </NavLink>

          <button
            type="button"
            className="header__menu-btn"
            onClick={openMenu}
          >
            <div className="icon icon__menu" />
          </button>

          <Nav nameBlock="header" />
        </div>
      </div>
    </header>
  );
};
