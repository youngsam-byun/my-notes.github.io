import React, { Suspense, useEffect, useState } from 'react';
import { PostList } from '../PostList';
import { ErrorBoundary } from '../../error-boundary/ErrorBoundary';

export function SuspenseExample() {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState('init');
  useEffect(() => {
    setState('mounted');
  }, []);
  console.log(state);
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <PostList />
      </Suspense>
    </ErrorBoundary>
  );
}
