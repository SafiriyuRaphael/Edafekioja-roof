import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs', // Update this to reflect the new .cjs extension
  },
  server: {
    host: '0.0.0.0', // Allow connections from any network interface
    port: 5173,      // Optional: specify the port
  }

  
})
// server: {
//   host: '0.0.0.0', // Allow connections from any network interface
//   port: 5173,      // Optional: specify the port
// }