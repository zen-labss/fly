'use strict';

var vue = require('vue');
var serverRenderer = require('vue/server-renderer');
var nodemailer = require('nodemailer');

const render = async (App, data) => {
  const app = vue.createApp({ render: () => vue.h(App) }, data);

  const html = await serverRenderer.renderToString(app).then((html) => {
    return html;
  });

  return html;
};

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {
  name: "button",

  props: ["text"],
};

const _hoisted_1 = { style: {
      border: '2px solid #000',
      borderRadius: '10px',
      padding: '10px',
    } };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", _hoisted_1, [
    vue.createElementVNode("span", null, vue.toDisplayString($props.text), 1 /* TEXT */)
  ]))
}
var Button = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render],['__file',"/home/gsoares/Projects/zen/packages/lib-vue3/src/button.vue"]]);

const _sfc_main = {
  __name: 'Hello',
  setup(__props) {

const name = vue.ref("Hello");
const lastname = vue.ref("World");

const fullname = vue.computed(() => `${name.value} - ${lastname.value}`);

return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createElementVNode("h1", null, vue.toDisplayString(vue.unref(fullname)), 1 /* TEXT */),
    vue.createVNode(Button, { text: "Botão" })
  ]))
}
}

};
var Hello = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"/home/gsoares/Projects/zen/packages/test/src/Hello.vue"]]);

const data = {
  id: "asd",
};

const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shumtztuber2@gmail.com",
      pass: "rgobhfcekmtveqju",
    },
  });

  const emailHtml = await render(Hello, data);

  const options = {
    from: "email@vanni.app",
    to: "giovanni_soares@aol.com",
    subject: "hello world",
    html: emailHtml,
  };

  transporter.sendMail(options);
};

sendEmail();
