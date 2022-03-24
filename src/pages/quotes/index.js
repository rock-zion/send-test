import React from 'react';
import { Header } from '../../components/header';
import { Button } from '../../components/input/buttons';
import style from './style.module.css';
import { QuoteCard } from '../../components/quotes/quotes-card';
import { useQuotesData } from '../../contexts/quotes';
import { Filter } from 'components/quotes/filter';
import { Pagination } from 'components/paginate';

const Quotes = () => {
  const handleCreateSomething = () => {};
  const { quotes, filterBy } = useQuotesData();

  return (
    <>
      <Header title='Quotes'>
        <Button
          handleClick={handleCreateSomething}
          classes='bg-primary text-white'>
          Create New
        </Button>
      </Header>

      <div className={style['filter-wrapper']}>
        <Filter />
      </div>

      <div className={style['quotes-parent']}>
        {quotes
          .filter(quote =>
            filterBy === 'all' ? () => {} : quote.status === filterBy
          )
          .map(item => (
            <QuoteCard
              key={item?.id}
              id={item?.id}
              origin={item?.origin}
              destination={item.destination}
              cargo={item?.cargo}
              cost={item?.cost}
              status={item?.status}
            />
          ))}
      </div>
      <Pagination />
    </>
  );
};

export default Quotes;
