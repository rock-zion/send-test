import classNames from 'classnames';
import React from 'react';
import style from './main-fallback.module.css';

export const MainFallback = () => {
  return (
    <div className={style['main-fallback-wrapper']}>
      <div className={classNames(style['side'], 'skeleton')}></div>
      <div className={style['main']}>
        <div className={classNames(style['header'], 'skeleton')}></div>

        <div className={style['']}></div>

        <div className={style['card']}>
          <div className='skeleton'></div>
          <div className='skeleton'></div>
        </div>
        <div className={style['card']}>
          <div className='skeleton'></div>
          <div className='skeleton'></div>
        </div>
        <div className={style['card']}>
          <div className='skeleton'></div>
          <div className='skeleton'></div>
        </div>
        <div className={style['card']}>
          <div className='skeleton'></div>
          <div className='skeleton'></div>
        </div>
      </div>
    </div>
  );
};
