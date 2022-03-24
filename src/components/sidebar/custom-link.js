import React from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import style from './style.module.css';
import classNames from 'classnames';

export const CustomLink = ({ to, Icon, title }) => {
  const filledIcons = ['quotes', 'notifications'];
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const aMatch = classNames({ [style['active-custom-link']]: match });

  return (
    <Link className={classNames(style['custom-link'], aMatch)} to={to}>
      {filledIcons.includes(to) ? (
        <Icon stroke={match ? '#0746A6' : '#78797A'} />
      ) : (
        <Icon fill={match ? '#0746A6' : '#78797A'} />
      )}
      <span>{title}</span>
    </Link>
  );
};
