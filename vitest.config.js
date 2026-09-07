import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,   // makes describe/test/expect available without importing
    environment: 'node',
  },
});
