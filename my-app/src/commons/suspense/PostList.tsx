import { IPost, Post } from './Post';
import React from 'react';
import { fetchAllPosts } from '../../apis/api-jsonplaceholder';

const res = fetchAllPosts();
export function PostList() {
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
