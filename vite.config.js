import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig(({ command }) => {
  return {
    root: "src",
    base: "/catademy/",
    build: {
      sourcemap: true,
      outDir: "../dist",
    },
    plugins: [injectHTML()],
  };
});
