import React from 'react';

interface IErrorBoundaryFallback {
  errors?: Error;
}

export function ErrorBoundaryFallback({ errors }: IErrorBoundaryFallback) {
  return (
    <>
      <h2>Error</h2>
      <div>{errors && errors.stack}</div>
    </>
  );
}
