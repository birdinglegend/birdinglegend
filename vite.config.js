import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        channelList: path.resolve(__dirname, 'channel-list/index.html'),
        contact: path.resolve(__dirname, 'contact/index.html'),
        gear: path.resolve(__dirname, 'gear/index.html'),
        linkegg: path.resolve(__dirname, 'link-egg/index.html'),
        locations: path.resolve(__dirname, 'locations/index.html'),
      }
    }
  }
})