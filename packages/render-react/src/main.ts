import * as ReactDOMServer from "react-dom/server";

const render = async (App: React.ReactElement) => {
  const html = await ReactDOMServer.renderToStaticMarkup(App);

  return html;
};

export { render };
