import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": "{}",
    process: { env: {} },
    global: "window",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "wc/chat-bot.tsx"),
      name: "ChatBot",
      formats: ["iife"],
      fileName: () => "chat-bot.js",
    },
    outDir: "public",
    manifest: true,
    rollupOptions: {
      external: [],
      output: {
        inlineDynamicImports: true,
        chunkFileNames: "chunks/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
        entryFileNames: 'chat-bot.js',
      },
      // Remove this line - it's not valid in rollupOptions
      // manualChunks: undefined,
    },
    sourcemap: false,
    emptyOutDir: true, // Changed to true to clean builds
  },
}); 