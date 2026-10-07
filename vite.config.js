import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",

  plugins: [tailwindcss()],

  build: {
    outDir: "dist",

    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "index.html"),
        lifeList: path.resolve(__dirname, "life-list/index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
        gear: path.resolve(__dirname, "gear/index.html"),
        linkegg: path.resolve(__dirname, "link-egg/index.html"),
      },
    },
  },
});
