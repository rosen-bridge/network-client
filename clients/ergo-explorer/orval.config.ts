import { defineConfig } from 'orval';

export default defineConfig({
  ergoNodeClient: {
    input: {
      validation: false,
      target: `./openapi-v${process.env.VERSION}.yaml`,
    },
    output: {
      target: '.',
      schemas: '../types',
      workspace: `./src/v${process.env.VERSION}/api`,
      mode: 'split',
      client: 'axios',
      prettier: true,
      override: {
        useBigInt: true,
        mutator: {
          path: '../../axios.ts',
          name: 'createAxiosInstance',
        },
      },
    },
  },
});
