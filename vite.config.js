import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Melp-EDT/',
  server: {
    proxy: {
      '/api': {
        target: 'https://recruiting-datasets.s3.us-east-2.amazonaws.com',
        changeOrigin: true,
        rewrite: path =>
          path.replace(/^\/api/, ''),
      },
    },
  },
})
