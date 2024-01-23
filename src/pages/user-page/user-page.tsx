import React from 'react';
import { useParams } from 'react-router-dom';

import './user-page.scss';
import { getUserByID } from '../../utils/api/getUserById';

import { NotFound } from '../not-found-page';
import { NotFoundUser } from './not-found-user';
import { UserArticle } from './user-article';

export const UserPage: React.FC = () => {
  const { userId } = useParams();

  if (!userId) {
    return <NotFound />;
  }

  const user = getUserByID(+userId);

  if (!user) {
    return <NotFoundUser />;
  }

  return (
    <div className="user-page">
      <UserArticle user={user} />
    </div>
  );
};
