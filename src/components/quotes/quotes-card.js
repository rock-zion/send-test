import React from 'react';
import { ReactComponent as ShipIcon } from '../../assets/uil_ship_lg.svg';
import arrowRight from '../../assets/arrow1.svg';
import style from './quote-card.module.css';
import classNames from 'classnames';
import { numberWithCommas as fNum } from '../../utils/index';

export const QuoteCard = ({ status, origin, cost, destination, id, cargo }) => {
  const getColor = status => {
    if (status === 'pending') {
      return 'text-yellow';
    }
    if (status === 'booked') {
      return 'text-green';
    }
    if (status === 'ready') {
      return 'text-grey';
    }
  };

  return (
    <div className={style['wrapper']}>
      <div className={style['left-quote']}>
        <div className=''>
          <div className={style['quote-detail']}>
            <div className='flex items-center'>
              <ShipIcon />
              <span className={style['shipment-id']}>{id}</span>
            </div>

            <div className={style['cargo']}>{cargo}</div>
          </div>
          <span className={style['web-import']}>{'IMPORT'}</span>
        </div>
        <div className={style['origin']}>
          <span className={style['location']}>
            {origin?.port}, {origin?.country}
          </span>
          <span className={style['date']}>Ready: {origin?.date}</span>
        </div>
      </div>

      <div className={style['arrow-wrapper']}>
        <img src={arrowRight} alt='' />
      </div>
      {/* <div className=''></div> */}

      <div className={style['right-quote']}>
        <div className={style['destination']}>
          <span className={style['location']}>
            {destination?.port}, {destination?.country}
          </span>
          <span className={style['date']}>Expires: {destination?.date}</span>
        </div>
        <div className={style['cost-wrapper']}>
          <span className={style['cost']}>₦ {fNum(cost)}</span>
          <span className={classNames(style['status'], getColor(status))}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};
