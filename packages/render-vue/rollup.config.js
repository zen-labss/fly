import vue from "@vitejs/plugin-vue";
import styles from "rollup-plugin-styles";

export default {
  input: "src/main.ts",
  output: {
    file: "./dist/vue.cjs.js",
    format: "cjs",
    globals: {
      vue: "Vue",
      "lodash/mergeWith": "_.mergeWith",
      "lodash/isString": "_.isString",
    },
  },
  external: ["vue", "lodash/mergeWith", "lodash/isString"],
  plugins: [vue(), styles({ mode: "inject" })],
};
