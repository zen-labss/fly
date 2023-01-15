import vue from "@vitejs/plugin-vue";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";

export default {
  input: "src/main.ts",
  output: {
    inlineDynamicImports: true,
    file: "./dist/vue.cjs",
    format: "cjs",
    globals: {
      vue: "Vue",
      "lodash/mergeWith": "_.mergeWith",
      "lodash/isString": "_.isString",
    },
  },
  external: ["vue", "lodash/mergeWith", "lodash/isString"],
  plugins: [vue(), dynamicImportVars()],
};
