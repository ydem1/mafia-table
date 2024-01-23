import React from 'react';
import { NavLink } from 'react-router-dom';

import './user-card.scss';

import { User } from '../../../types/User';

type Props = {
  user: User,
  num: number
};

export const UserCard: React.FC<Props> = ({ user, num }) => {
  const {
    id,
    imgUrl = 'img/users/user-default',
    score,
    nickname,
  } = user;

  return (
    <NavLink
      className="user-card"
      to={`/scoreboard/user/${id}`}
    >

      <div className="user-card__right-section">
        <p className="user-card__number">
          {num + 1}
        </p>
        <img
          src={`${imgUrl}/pofile-img.png`}
          alt={nickname}
          className="user-card__img"
        />

        <p className="user-card__nickname">
          {nickname}
        </p>
      </div>

      <p className="user-card__score">
        {score}
      </p>
    </NavLink>
  );
};
