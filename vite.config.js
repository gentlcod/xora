import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Treat .js files as JSX
    include: [/src\/.*\.(js|jsx)$/], // Include .js and .jsx files in src folder
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure .js and .jsx files are resolved correctly
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Simplify chunking for compatibility
      },
    },
    commonjsOptions: {
      include: /node_modules/, // Ensure CommonJS dependencies are bundled
    },
  },
});
