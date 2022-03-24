import React from 'react';
import style from './style.module.css';
import { usePagination } from 'contexts/pagination';
import increment from '../../assets/increment.svg';
import decrement from '../../assets/decrement.svg';

export const Pagination = () => {
  return (
    <>
      <div className={style['pagination-wrapper']}>
        <div className={style['results']}>Showing 1-6 of 75 results</div>

        <button className={style['pagination-count']}>1</button>
        <button className={style['pagination-count']}>2</button>
        <button className={style['pagination-count']}>3</button>
        <span>...</span>
        <button className={style['pagination-count']}>10</button>
        <Incrementor />
      </div>
    </>
  );
};

export const Incrementor = () => {
  const { perPage } = usePagination();
  return (
    <div className={style['incrementor-wrapper']}>
      <div className={style['perpage-wrapper']}>{perPage}</div>

      <div className={style['incrementor-button-wrapper']}>
        <button>
          <img src={increment} alt='' />
        </button>
        <button>
          <img src={decrement} alt='' />
        </button>
      </div>
    </div>
  );
};
