import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          diabetes: path.resolve(__dirname, 'diabetes.html'),
          hypertension: path.resolve(__dirname, 'hypertension.html'),
          obesity: path.resolve(__dirname, 'obesity.html'),
          addiction: path.resolve(__dirname, 'addiction.html'),
          cyberbullying: path.resolve(__dirname, 'cyberbullying.html'),
          suicide: path.resolve(__dirname, 'suicide.html'),
          firstaid: path.resolve(__dirname, 'firstaid.html'),
          'domestic-violence': path.resolve(__dirname, 'domestic-violence.html'),
          bullying: path.resolve(__dirname, 'bullying.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
