import { defineConfig } from 'orval';

if (!process.env.SPEC_FILE)
  throw new Error(
    'Do not run "generate-client-base". Use "generate-client" instead.',
  );

export default defineConfig({
  ergoNodeClient: {
    input: {
      validation: false,
      target: process.env.SPEC_FILE,
    },
    output: {
      target: '.',
      schemas: '../types',
      workspace: './src/api',
      client: 'axios',
      mode: 'split',
      prettier: true,
      // Drop previously generated files so schemas removed from the spec don't
      // linger and get post-processed a second time by the codemods.
      clean: true,
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
