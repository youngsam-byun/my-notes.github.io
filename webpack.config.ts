import { Configuration } from 'webpack';

export const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
