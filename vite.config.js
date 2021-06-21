import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/VueBlockie.vue"),
      name: "VueBlockie",
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          esModule: true,
          exports: "named",
          globals: {
            vue: "Vue",
          },
        },
        {
          format: "umd",
          inlineDynamicImports: true,
          interop: "esModule",
          exports: "named",
          globals: {
            vue: "Vue",
          },
        },
      ],
    },
  },
  plugins: [vue()],
})
