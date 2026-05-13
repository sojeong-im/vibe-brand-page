import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        shop: resolve(__dirname, 'shop.html'),
        insight: resolve(__dirname, 'insight.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
      },
    },
  },
})
