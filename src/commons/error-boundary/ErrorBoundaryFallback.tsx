import React from 'react';

interface IErrorBoundaryFallback {
  errors?: Error;
}

export function ErrorBoundaryFallback({ errors }: IErrorBoundaryFallback) {
  return (
    <div style={{ border: '1px black solid' }}>
      <h2>Error</h2>
      <div>{errors && errors.stack}</div>
    </div>
  );
}
