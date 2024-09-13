import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/design-system-ignite/', // Caminho base para o GitHub Pages
  plugins: [react()],
});