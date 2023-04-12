import React from 'react';

export interface PostProps {
  id: number;
  userId: string;
  title: string;
  body: string;
}

export function Post(postProps: PostProps) {
  const { id, userId, title, body } = postProps;
  return (
    <ul key={id}>
      <li>
        {title} by {userId}
      </li>
      <li>{body}</li>
    </ul>
  );
}
