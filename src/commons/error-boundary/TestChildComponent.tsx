import React from 'react';
import { fetchThenThrow } from '../../apis/api-jsonplaceholder';
import { IPost, Post } from '../suspense/Post';
const res = fetchThenThrow();
export function TestChildComponent() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const posts: IPost[] = res.read();
  return (
    <>
      {posts.map((p: IPost) => (
        <Post key={p.id} {...p} />
      ))}
    </>
  );
}
