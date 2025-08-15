import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'index.html'),
        linktree: path.resolve(__dirname, '/linktree/index.html'),
      }
    }
  }
})