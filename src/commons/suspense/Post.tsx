import React from 'react';

export interface IPost {
  id: number;
  userId: string;
  title: string;
  body: string;
}

export function Post({ id, userId, title, body }: IPost) {
  return (
    <ul key={id}>
      <li>
        {title} by {userId}
      </li>
      <li>{body}</li>
    </ul>
  );
}
