import React, { Suspense } from 'react';
import { TestChildComponent } from './commons/error-boundary/stories/TestChildComponent';
import { ErrorBoundary } from './commons/error-boundary/ErrorBoundary';

export const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={'Loading...'}>
          <TestChildComponent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
