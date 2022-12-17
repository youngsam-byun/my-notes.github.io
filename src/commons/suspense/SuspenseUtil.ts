export function wrapPromise(promise: Promise<unknown>) {
  let status = 'pending';

  let response: unknown;

  // eslint-disable-next-line promise/prefer-await-to-then
  const suspender = promise.then(
    // eslint-disable-next-line promise/always-return
    (res) => {
      status = 'success';
      response = res;
    },
    // eslint-disable-next-line promise/prefer-await-to-callbacks
    (err) => {
      status = 'error';
      response = err;
    },
  );

  function read() {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  }

  return { read };
}
