import * as path from "path";
import { spawnSync, execSync } from "child_process";

const files = ["html", "button", "container", "hr", "img", "section", "text"];

enum Target {
  React = "react",
  Vue3 = "vue3",
}

const extensionMap: Record<Target, string> = {
  [Target.React]: "tsx",
  [Target.Vue3]: "vue",
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
