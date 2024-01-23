import React from 'react';

import './board.scss';

import { User } from '../../types/User';
import { UserCard } from './user-card';

type Props = {
  users: User[],
};

export const Board: React.FC<Props> = ({ users }) => {
  return (
    <section className="scoreboard__board board">
      <div className="container">
        <div className="board__content">
          <div className="board__header">
            <h3 className="board__colomn-name">
              &#8470;
            </h3>

            <h3 className="board__colomn-name">
              nickname
            </h3>

            <h3 className="board__colomn-name">
              score
            </h3>
          </div>

          <ul className="board__list">
            {users.map((user, index) => (
              <li
                key={user.id}
                className="board__item"
              >
                <UserCard user={user} num={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
