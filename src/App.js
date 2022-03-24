import './styles/index.css';
import React, { Suspense, lazy } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { MainFallback } from 'components/loading/main-fallback';

const Main = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/main')), 2000);
  });
});
// const Main = lazy(() => import('./pages/main'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<MainFallback />}>
        <Routes>
          <Route path='/' element={<Navigate to='/main/quotes' replace />} />
          <Route path='/main/*' element={<Main />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
