import { defineConfig } from 'vite';

// The GitHub repository MUST be named e-plantShopping for this base URL.
export default defineConfig({
  base: '/e-plantShopping/',
  server: {
    host: '0.0.0.0',
  },
});
