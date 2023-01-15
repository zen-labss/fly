import * as ReactDOMServer from "react-dom/server";

const render = async (App) => {
  const html = await ReactDOMServer.renderToStaticMarkup(App);

  return html;
};

export { render };
