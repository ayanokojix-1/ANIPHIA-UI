import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
const port = process.env.PORT || 7000
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  tailwindcss()
  ],
  server:{
    host:true,
    port:port,
allowedHosts:['e914c37d-598d-45cb-a780-e7de4ba1e7b5-00-1cm4fz6vvt5az.janeway.replit.dev', "aniphia-ui.onrender.com"]

  }
    })
