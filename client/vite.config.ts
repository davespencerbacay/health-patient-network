import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      components: path.resolve(__dirname, 'src/components'),
      contexts: path.resolve(__dirname, 'src/contexts'),
      routes: path.resolve(__dirname, 'src/routes'),
      services: path.resolve(__dirname, 'src/services'),
      utilities: path.resolve(__dirname, 'src/utilities'),
      layout: path.resolve(__dirname, 'src/layout'),
      constants: path.resolve(__dirname, 'src/constants'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      models: path.resolve(__dirname, 'src/models'),
    },
  },
});