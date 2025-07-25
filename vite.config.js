import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ClickEnglish.github.io/', // 🔥 Base URL for deployment
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 🔥 Escucha en todas las interfaces de red
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
