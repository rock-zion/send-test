import React from 'react';
import style from './filter.module.css';
import { useQuotesData } from '../../contexts/quotes/index';

export const Filter = () => {
  const { quotesFilter, setFilterBy, quotes, filterBy } = useQuotesData();

  const getCount = (arr, status) => {
    if (status === 'all') {
      return quotes.length;
    }
    const newArray = arr.filter(item => item.status === status);
    return newArray.length;
  };
  return (
    <>
      {quotesFilter.map(status => (
        <div className={style['filter-parent']} key={status}>
          <button
            className={style['filter']}
            onClick={() => setFilterBy(status)}>
            {status}{' '}
            <span className={style['filter-count']}>
              {getCount(quotes, status)}
            </span>
          </button>
          {filterBy === status && <div className={style['highlight']}></div>}
        </div>
      ))}
    </>
  );
};
