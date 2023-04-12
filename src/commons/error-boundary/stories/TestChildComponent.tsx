import React from 'react';
import { fetchThenThrow } from '../../../apis/api-jsonplaceholder';
import { PostProps, Post } from '../../suspense/Post';
const res = fetchThenThrow();
export function TestChildComponent() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const posts: PostProps[] = res.read();
  return (
    <>
      {posts.map((p: PostProps) => (
        <Post key={p.id} {...p} />
      ))}
    </>
  );
}
