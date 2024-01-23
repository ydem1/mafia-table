import React from 'react';

import './menu.scss';
import { Nav } from '../nav';

type Props = {
  closeMenu: () => void,
};

export const Menu: React.FC<Props> = ({ closeMenu }) => {
  return (
    <aside className="menu">
      <div className="container">
        <div className="menu__content">
          <Nav nameBlock="menu" closeMenu={closeMenu} />

          <button
            type="button"
            className="menu__menu-close-btn"
            onClick={closeMenu}
          >
            <div className="icon icon__menu-close" />
          </button>
        </div>
      </div>
    </aside>
  );
};
