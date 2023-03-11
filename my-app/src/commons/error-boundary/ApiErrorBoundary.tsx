import React, { Suspense } from 'react';
import { TestChildComponent } from './TestChildComponent';
import { ErrorBoundary } from './ErrorBoundary';

export function ApiErrorBoundary() {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <ErrorBoundary>
        <TestChildComponent />
      </ErrorBoundary>
    </Suspense>
  );
}
