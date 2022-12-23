import React, { Suspense, useEffect, useState } from 'react';
import { PostList } from './PostList';

export function SampleDisplay() {
  console.log('render');
  const [state, setState] = useState('init');
  useEffect(() => {
    setState('mounted');
  }, [state]);
  console.log(state);
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <PostList />
    </Suspense>
  );
}
