import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ngrok } from "vite-plugin-ngrok";

export default defineConfig({
  plugins: [
    react(),
    ngrok("2d7bdlaxnIl99xe2bI9RqxQBdaB_2TLLptmYG1rofLo3uVqgH"),
  ],
});
