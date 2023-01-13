import * as path from "path";
import { spawnSync, execSync } from "child_process";

const files = ["html"];

enum Target {
  Angular = "angular",
  React = "react",
  Svelte = "svelte",
  Vue3 = "vue3",
  Solid = "solid",
  Qwik = "qwik",
}

const extensionMap: Record<Target, string> = {
  [Target.Angular]: "ts",
  [Target.React]: "tsx",
  [Target.Svelte]: "svelte",
  [Target.Vue3]: "vue",
  [Target.Solid]: "tsx",
  [Target.Qwik]: "tsx",
};

Object.values(Target).map((item) => {
  const outputDir = path.resolve(process.cwd(), "../", `lib-${item}`);
  let srcDir = path.resolve(outputDir, "src");

  const componentExtension = extensionMap[item];

  files.forEach((element) => {
    const fileName = `${element}.${componentExtension}`;
    const outPath = path.resolve(srcDir, fileName);

    const file = path.resolve(process.cwd(), `components/${element}.lite.tsx`);

    const execCommand = `yarn mitosis compile --to=${item} --out=${outPath} ${file} --force`;

    const result = execSync(execCommand, { cwd: process.cwd() });

    console.log("result", result.toString());
  });
});
