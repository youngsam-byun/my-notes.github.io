import { wrapPromise } from '../commons/suspense/SuspenseUtil';
import axios, { AxiosResponse } from 'axios';

export function fetchAllPosts() {
  const promise = axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(
      (res: AxiosResponse) =>
        new Promise((resolve) => setTimeout(() => resolve(res), 3000)),
    )
    // @ts-ignore
    .then((res) => res.data);
  return wrapPromise(promise);
}

export function fetchThenThrow() {
  const promise = axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(
      (res) => new Promise((resolve) => setTimeout(() => resolve(res), 3000)),
    )
    // @ts-ignore
    .then((res) => res.data)
    .then((data) => {
      throw new Error(data);
    });
  return wrapPromise(promise);
}
