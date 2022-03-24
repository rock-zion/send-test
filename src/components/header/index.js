import React from 'react';
import style from './style.module.css';
import hamburger from '../../assets/hamburger.svg';
import { useSidebar } from 'contexts/sidebar';

export const Header = ({ title, children }) => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  return (
    <header className={style['header']}>
      <div className='flex item-center'>
        <button
          className={style['hamburger']}
          onClick={() => toggleSidebar(!sidebarOpen)}>
          <img src={hamburger} alt='sidebar toggle menu' />
        </button>

        <h1 className={style['title']}>{title}</h1>
      </div>

      <div>{children}</div>
    </header>
  );
};
