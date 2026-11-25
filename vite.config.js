import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativa: funciona no GitHub Pages (/MyPortfolio/) e em qualquer domínio
export default defineConfig({
  plugins: [react()],
  base: './',
})
