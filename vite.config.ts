import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import { AntdResolve, createStyleImportPlugin } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
      // libs: [
      //   // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
      //   {
      //     libraryName: "ant-design-vue",
      //     esModule: true,
      //     resolveStyle: (name) => {
      //       return `ant-design-vue/es/${name}/style/index`;
      //     },
      //   },
      // ],
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
