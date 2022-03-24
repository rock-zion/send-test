import React, { createContext, useContext, useState } from 'react';

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [perPage, setPerPage] = useState(6);

  return (
    <PaginationContext.Provider value={{ perPage, setPerPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  return useContext(PaginationContext);
};
