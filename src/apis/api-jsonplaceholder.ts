import { wrapPromise } from '../commons/suspense/SuspenseUtil';
import axios from 'axios';

export function fetchAllPosts() {
  const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
  // @ts-ignore
  return wrapPromise(promise);
}

export function fetchThenThrow() {
  const promise = axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(
      (res) => new Promise((resolve) => setTimeout(() => resolve(res), 5000)),
    )
    // @ts-ignore
    .then((res) => res.data)
    .then((data) => {
      throw new Error(data);
    });
  return wrapPromise(promise);
}
