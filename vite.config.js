import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "index.html"),
        blog: path.resolve(__dirname, "blog/index.html"),
        malawibirdinglilongwe: path.resolve(__dirname, "blog/birding-lilongwe-malawi/index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
        gear: path.resolve(__dirname, "gear/index.html"),
        lifeList: path.resolve(__dirname, "life-list/index.html"),
        linkegg: path.resolve(__dirname, "link-egg/index.html"),
        tours: path.resolve(__dirname, "tours/index.html"),
        malawitours: path.resolve(__dirname, "tours/malawi/index.html"),
        southafricatours: path.resolve(__dirname, "tours/south-africa/index.html"),
        zambiatours: path.resolve(__dirname, "tours/zambia/index.html"),
      },
    },
  },
});
