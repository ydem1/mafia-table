import React from 'react';
import './user-article.scss';
import { User } from '../../../types/User';

type Props = {
  user: User,
};

export const UserArticle: React.FC<Props> = ({ user }) => {
  const {
    imgUrl = 'img/users/user-default',
    name,
    surname,
    nickname,
  } = user;

  return (
    <article className="user-article">
      <div
        className="user-article__background"
        style={{
          backgroundImage: 'url(img/users/background-img.png)',
        }}
      >
      </div>
      <div className="container">
        <div className="user-article__content">
          <img
            src={`${imgUrl}/pofile-img.png`}
            alt="user"
            className="user-article__img"
          />

          <div className="user-article__header">
            <h3 className="user-article__fullname">
              {`${name} ${surname}`}
            </h3>

            <h4 className="user-article__nickname">
              {nickname}
            </h4>

          </div>

          <div className="user-article__description">
            <h4 className="user-article__title">
              Profile:
            </h4>

            <p className="user-article__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam in eaque labore iure quis tempore sunt non nihil.
              Harum amet rem quam cum velit corporis consectetur ipsam
              vitae consequuntur cumque!
            </p>
          </div>

          <ul className="user-article__social-list">
            <li className="user-article__social-item">
              <a href="https://instagram.com" className="user-article__social-link">
                <div className="icon icon--social-link icon__instagram" />
              </a>
            </li>

            <li className="user-article__social-item">
              <a href="https://facebook.com" className="user-article__social-link">
                <div className="icon icon--social-link icon__facebook" />
              </a>
            </li>

            <li className="user-article__social-item">
              <a href="https://telegram.com" className="user-article__social-link">
                <div className="icon icon--social-link icon__telegram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};
