import { Config } from '@stencil/core';
import { less } from '@stencil/less';

export const config: Config = {
  namespace: 'stencil-library',
  plugins: [
    less(),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
};
