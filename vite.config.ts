import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/marvel-spa/',
  server: {
    cors: true,
    strictPort: true,
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss', '.css'],
    alias: {
      '@': resolve(__dirname + '/src/')
    }
  },
  plugins: [react()]
})
