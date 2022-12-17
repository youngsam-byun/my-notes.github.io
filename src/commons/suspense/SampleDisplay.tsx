import React, { Suspense } from 'react';
import { PostList } from './PostList';

export function SampleDisplay() {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <PostList />
    </Suspense>
  );
}
