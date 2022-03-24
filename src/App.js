import React, { Suspense, lazy } from 'react';
import { MainFallback } from 'components/loading/main-fallback';
const Main = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/main')), 2000);
  });
});
      <Suspense fallback={<MainFallback />}>
