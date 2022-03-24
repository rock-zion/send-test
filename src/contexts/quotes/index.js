import React, { createContext, useContext, useState } from 'react';
import { quotesData } from './data';

export const QuotesContext = createContext();

export const QuotesProvider = ({ children }) => {
  const quotesFilter = ['all', 'pending', 'ready', 'booked'];
  const [filterBy, setFilterBy] = useState(quotesFilter[0]);
  const [quotes] = useState(quotesData);

  console.log('quotes', quotes);
  return (
    <QuotesContext.Provider
      value={{ quotesFilter, quotes, filterBy, setFilterBy }}>
      {children}
    </QuotesContext.Provider>
  );
};

export const useQuotesData = () => {
  return useContext(QuotesContext);
};
