import React from 'react';

import './scoreboard-page.scss';
import { usersFromServer } from '../utils/api/users';

import { Board } from './board';

export const ScoreboardPage: React.FC = () => {
  const visiableUsers = [...usersFromServer];

  return (
    <div className="scoreboard-page">
      <Board users={visiableUsers} />
    </div>
  );
};
