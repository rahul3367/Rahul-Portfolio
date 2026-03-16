import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
// https://vite.dev/config/


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,    // This exposes the project on your local network
    port: 5173,    // You can also force a specific port here if you want
  },
  resolve: {
    alias: {
      // This is the crucial part — @/ now points to your src folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
