import { defineConfig } from 'orval';

export default defineConfig({
  ergoNodeClient: {
    input: {
      validation: false,
      target: './openapi.yaml',
    },
    output: {
      target: '.',
      schemas: '../types',
      workspace: './src/api',
      mode: 'split',
      client: 'axios',
      prettier: true,
      override: {
        useBigInt: true,
        mutator: {
          path: '../axios.ts',
          name: 'createAxiosInstance',
        },
      },
    },
  },
});
