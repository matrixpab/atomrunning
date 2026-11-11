import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        potrero: resolve(__dirname, 'evento-potrero-corre-2026.html'),
        ba21k: resolve(__dirname, 'evento-21k-buenos-aires.html'),
        admin: resolve(__dirname, 'admin.html'),
        marketing: resolve(__dirname, 'marketing.html'),
      },
    },
  },
});
