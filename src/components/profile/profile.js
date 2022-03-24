import React from 'react';
import style from './profile.module.css';
import MTlogo from '../../assets/MT.svg';
import chevron from '../../assets/fi_chevron-down.svg';

export const ProfileWithDetail = ({ detail1, detail2 }) => {
  return (
    <div className={style['parent']}>
      <div className={style['logo-wrapper']}>
        <img src={MTlogo} alt='' />
      </div>
      <div className={style['detail-wrapper']}>
        <span className={style['detail-one']}>{detail1}</span>
        <span className={style['detail-two']}>{detail2}</span>
      </div>
      <button>
        <img src={chevron} alt='' />
      </button>
    </div>
  );
};
