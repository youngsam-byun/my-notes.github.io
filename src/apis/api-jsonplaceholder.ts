import { wrapPromise } from '../commons/suspense/SuspenseUtil';

export function fetchAllPosts() {
  const promise = fetch('https://jsonplaceholder.typicode.com/posts')
    // eslint-disable-next-line promise/prefer-await-to-then
    .then(
      (res) => new Promise((resolve) => setTimeout(() => resolve(res), 3000)),
    )
    // eslint-disable-next-line promise/prefer-await-to-then,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line promise/prefer-await-to-then
    .then((res) => res.json());
  return wrapPromise(promise);
}
