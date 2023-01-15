import { render } from "@fly-email/render-vue";
import View from "./View.vue";
import nodemailer from "nodemailer";

const props = {
  id: 1,
};

(async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    },
  });

  const emailHtml = await render(View, props);

  const options = {
    from: "",
    to: "",
    subject: "hello world",
    html: emailHtml,
  };

  transporter.sendMail(options);
})();
