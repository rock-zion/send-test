import React from 'react';
import style from './style.module.css';
export const Header = ({ title, children }) => {
  return (
    <header className={style['header']}>
      <div className='flex item-center'>
        <h1 className={style['title']}>{title}</h1>
      </div>

      <div>{children}</div>
    </header>
  );
};
