import { PostProps, Post } from './Post';
import React from 'react';
import { fetchAllPosts } from '../../apis/api-jsonplaceholder';

const res = fetchAllPosts();
export function PostList() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const posts: PostProps[] = res.read();
  return (
    <>
      {Array.isArray(posts) &&
        posts.map((p: PostProps) => <Post key={p.id} {...p} />)}
    </>
  );
}
