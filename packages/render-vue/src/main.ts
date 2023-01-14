import { createApp, h } from "vue";
import { renderToString } from "vue/server-renderer";

const render = async (App, data) => {
  const app = createApp({ render: () => h(App) }, data);

  const html = await renderToString(app);

  return html;
};

export { render };
