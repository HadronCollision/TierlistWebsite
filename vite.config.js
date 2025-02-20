import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ngrok } from "vite-plugin-ngrok";
import styleX from "vite-plugin-stylex";

export default defineConfig({
  build: {
    sourcemap: false,
  },
  plugins: [
    react(),
    styleX(),
    ngrok("2d7bdlaxnIl99xe2bI9RqxQBdaB_2TLLptmYG1rofLo3uVqgH"),
  ],
});
