export function wrapPromise(promise: Promise<unknown>) {
  let status = 'pending';
  let responseBody: unknown;

  // eslint-disable-next-line
  const suspender = promise.then(
    // eslint-disable-next-line promise/always-return
    (res) => {
      status = 'success';
      responseBody = res;
    },
    // eslint-disable-next-line promise/prefer-await-to-callbacks
    (err) => {
      status = 'error';
      responseBody = err;
    },
  );

  function read() {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw responseBody;
      default:
        return responseBody;
    }
  }

  return { read };
}
