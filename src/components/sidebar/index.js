import React from 'react';
import style from './style.module.css';
import logo from '../../assets/LOGO.svg';
import { CustomLink } from './custom-link';
import { topRoutes, midRoutes, baseRoutes } from './routes';
import classNames from 'classnames';
import { useSidebar } from 'contexts/sidebar';
import close from '../../assets/close.svg';
import { ProfileWithDetail } from 'components/profile/profile';

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const openSidebar = classNames({ [style['open-side-nav']]: sidebarOpen });
  return (
    <nav className={classNames(style['nav'], openSidebar)}>
      <div className={style['brand-wrapper']}>
        <img src={logo} alt='brand-logo' />

        <button
          className={style['close-wrapper']}
          onClick={() => toggleSidebar(!sidebarOpen)}>
          <img src={close} alt='' />
        </button>
      </div>

      <div className={classNames(style['top-nav'], style['links-wrapper'])}>
        {topRoutes.map(routes => (
          <CustomLink
            key={routes.title}
            title={routes.title}
            to={routes.link}
            Icon={routes.img}></CustomLink>
        ))}
      </div>

      <div className={classNames(style['mid-nav'], style['links-wrapper'])}>
        {midRoutes.map(routes => (
          <CustomLink
            key={routes.title}
            title={routes.title}
            to={routes.link}
            Icon={routes.img}></CustomLink>
        ))}
      </div>

      <div className={classNames(style['mid-nav'], style['links-wrapper'])}>
        {baseRoutes.map(routes => (
          <CustomLink
            key={routes.title}
            title={routes.title}
            to={routes.link}
            Icon={routes.img}></CustomLink>
        ))}
      </div>

      <div className={style['nav-base']}>
        <ProfileWithDetail
          detail1='Mati Industries'
          detail2='Lanremati@gmail.com'
        />
      </div>
    </nav>
  );
};

export default Sidebar;
