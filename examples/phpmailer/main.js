import { render } from "@fly-email/render-vue";
import * as fs from "fs";

const array = [];
const props = {
  id: 1,
};

fs.readdir("./view", (err, files) => {
  if (err) throw err;

  const filesVue = files.filter((i) => {
    return i.indexOf(".vue") !== -1;
  });

  filesVue.map((i) => {
    const files = i.split(".").shift();
    array.push(files);
  });

  array.map(async (i) => {
    const App = await import(`./view/${i}.vue`);
    const emailHtml = await render(App.default, props);

    fs.writeFile(`./dist/${i}.html`, emailHtml, () => {});
  });
});
