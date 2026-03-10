// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detail: resolve(__dirname, 'hustle.html'),
        error: resolve(__dirname, 'public/404.html')
      }
    }
  },
  server: {
    proxy: {
      '/hustles': 'http://localhost:3001'
    }
  }
})
