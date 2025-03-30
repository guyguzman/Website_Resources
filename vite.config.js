import { defineConfig } from "vite";

export default defineConfig({
  // Base public path when served in production
  base: "/",

  // Development server configuration
  server: {
    port: 3000,
    open: true, // Auto-open browser
    strictPort: false,
    cors: true,
  },

  // Build options
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "esbuild",
  },

  // Resolve options for file extensions and aliases
  resolve: {
    alias: {
      // You can add path aliases here, for example:
      // '@': path.resolve(__dirname, './src')
    },
  },

  // CSS related options
  css: {
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@import "./src/styles/variables.scss";`
    //   }
    // }
  },

  // Plugin options
  plugins: [],
});
