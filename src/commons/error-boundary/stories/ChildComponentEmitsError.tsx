import React from 'react';
import { ErrorBoundary } from '../ErrorBoundary';

function ChildComponent() {
  throw new Error('Error fired');
  return <></>;
}
export function ChildComponentEmitsError() {
  return (
    <ErrorBoundary>
      <ChildComponent />
    </ErrorBoundary>
  );
}
