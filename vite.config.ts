import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core in its own cacheable chunk
          'vendor-react': ['react', 'react-dom'],
          // Animation library separated (heavy, ~140 KB)
          'vendor-framer': ['framer-motion'],
          // Icon library separated
          'vendor-icons': ['lucide-react'],
        },
      },
    },
    // Enable source-map-less, compressed output
    sourcemap: false,
    minify: 'esbuild',
  },
})

