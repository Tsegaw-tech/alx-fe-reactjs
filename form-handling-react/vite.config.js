import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      include: "**/*.{js,jsx,ts,tsx}", // ensures .js files with JSX are compiled
      jsxRuntime: "automatic", // use the modern JSX transform
    }),
  ],
});
