import { wrapPromise } from '../commons/suspense/SuspenseUtil';
import axios, { AxiosResponse } from 'axios';

export function fetchAllPosts() {
  const promise = axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(
      (res: AxiosResponse) =>
        new Promise((resolve) => setTimeout(() => resolve(res), 3000)),
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .then((res) => res.data);
  return wrapPromise(promise);
}
