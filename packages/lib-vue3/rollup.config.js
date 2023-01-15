import vue from "@vitejs/plugin-vue";

export default {
  input: "src/main.js",
  output: {
    file: "./dist/vue.cjs",
    format: "cjs",
    globals: {
      vue: "Vue",
      "lodash/mergeWith": "_.mergeWith",
      "lodash/isString": "_.isString",
    },
  },
  external: ["vue", "lodash/mergeWith", "lodash/isString"],
  plugins: [vue()],
};
