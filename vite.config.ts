
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Importante para o GitHub Pages ler os arquivos corretamente
  build: {
    outDir: 'dist',
  }
})
