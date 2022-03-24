import React from 'react';
import classNames from 'classnames';
import style from './buttons.module.css';

export const Button = ({ handleClick, classes, type, children }) => {
  return (
    <button
      onClick={handleClick}
      className={classNames(classes, style['button'])}
      type={type}>
      {children}
    </button>
  );
};
