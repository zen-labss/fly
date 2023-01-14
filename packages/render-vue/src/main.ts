import { createApp, h } from "vue";
import { renderToString } from "vue/server-renderer";

const render = async (App, data) => {
  const app = createApp({ render: () => h(App) }, data);

  const html = await renderToString(app).then((html) => {
    return html;
  });

  return html;
};

export { render };
