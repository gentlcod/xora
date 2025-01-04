import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Treat .js files as JSX
    include: [/src\/.*\.js$/], // Include all .js files in src folder
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure .js files with JSX syntax are resolved correctly
  },
})
