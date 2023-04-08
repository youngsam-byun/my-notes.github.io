import React, { Suspense } from 'react';
import { TestChildComponent } from './TestChildComponent';
import { ErrorBoundary } from '../ErrorBoundary';

export function ApiErrorBoundaryTest() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <TestChildComponent />
      </Suspense>
    </ErrorBoundary>
  );
}
