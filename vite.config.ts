import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/1z10/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,        // expose on local network
    port: 5173,
  },
})
