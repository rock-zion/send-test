import React from 'react';
import Sidebar from 'components/sidebar';
import Quotes from 'pages/quotes';
import { Routes, Route } from 'react-router-dom';
import { QuotesProvider } from 'contexts/quotes';
import { SidebarProvider } from 'contexts/sidebar';
import { PaginationProvider } from 'contexts/pagination';

const Main = () => {
  return (
    <>
      <SidebarProvider>
        <PaginationProvider>
          <Sidebar />
          <main className='app-main'>
            <Routes>
              <Route
                path='quotes'
                element={
                  <QuotesProvider>
                    <Quotes />
                  </QuotesProvider>
                }
              />
            </Routes>
          </main>
        </PaginationProvider>
      </SidebarProvider>
    </>
  );
};

export default Main;
