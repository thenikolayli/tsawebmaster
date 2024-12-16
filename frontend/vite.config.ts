import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from 'dotenv'
dotenv.config({path: "../.env"})

// https://vite.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
  base: process.env.DJANGO_DEBUG === "True" ? "/" : "/static/",
  build: {
    outDir: "../backend/dist",
    emptyOutDir: true
  },
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:8000",
    }
  }
  })
}