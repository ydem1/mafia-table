import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './nav.scss';

type Props = {
  nameBlock: string,
  closeMenu?: () => void,
};

export const Nav: React.FC<Props> = ({ nameBlock, closeMenu }) => {
  return (
    <nav className={`${nameBlock}__nav nav`}>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (
              classNames('nav__link', {
                'nav__link--active': isActive,
              })
            )}
            onClick={closeMenu}
            to="/"
          >
            home
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (
              classNames('nav__link', {
                'nav__link--active': isActive,
              })
            )}
            onClick={closeMenu}
            to="/scoreboard"
          >
            scoreboard
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (
              classNames('nav__link', {
                'nav__link--active': isActive,
              })
            )}
            onClick={closeMenu}
            to="/rules"
          >
            rules
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (
              classNames('nav__link', {
                'nav__link--active': isActive,
              })
            )}
            onClick={closeMenu}
            to="/about"
          >
            about
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (
              classNames('nav__link', {
                'nav__link--active': isActive,
              })
            )}
            onClick={closeMenu}
            to="/contact"
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
