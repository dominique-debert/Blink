import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import wasm from "vite-plugin-wasm";
import { tanstackRouter } from '@tanstack/router-vite-plugin'
import path from "path";

const plugins = [react(), svgr(), tanstackRouter(), wasm()];

export default defineConfig({
  plugins: plugins,
  css: {
    modules: {
      scopeBehaviour: "global"
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@use "/src/styles/variables.scss" as *;',
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ]
  },
  server: {
    strictPort: true
  },
  envPrefix: ["VITE_"],
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
  },
  worker: {
    format: "es"
  }
});