import { defineConfig } from 'vite';
import { resolve } from 'path';

const mpaRewrite = {
  name: 'mpa-rewrite',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/visitantes' || req.url === '/visitantes/') {
        req.url = '/visitante.html';
      }
      if (req.url === '/seja-iedv' || req.url === '/seja-iedv/') {
        req.url = '/seja-iedv.html';
      }
      next();
    });
  }
};

export default defineConfig({
  root: '.',
  base: '/IEDV/',
  plugins: [mpaRewrite],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        visitante: resolve(__dirname, 'visitante.html'),
        'seja-iedv': resolve(__dirname, 'seja-iedv.html'),
      }
    }
  }
});
