import React, { Suspense, lazy } from 'react';
const Main = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/main')), 2000);
  });
});
