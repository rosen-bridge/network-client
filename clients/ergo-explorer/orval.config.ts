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
      // Drop previously generated files so schemas removed from the spec don't
      // linger and get post-processed a second time by the codemods.
      clean: true,
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
