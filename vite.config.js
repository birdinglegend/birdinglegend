import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const root = fileURLToPath(new URL(".", import.meta.url));

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
        support: path.resolve(__dirname, "support/index.html"),
        gear: path.resolve(__dirname, "gear/index.html"),
        linkegg: path.resolve(__dirname, "link-egg/index.html"),
        // Other Pages
        410: resolve(root, "410.html"),
      },
    },
  },
});
