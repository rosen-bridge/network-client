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
      mode: 'tags',
      prettier: true,
      override: {
        mutator: {
          path: '../axios.ts',
          name: 'axios',
        },
      },
    },
  },
});
