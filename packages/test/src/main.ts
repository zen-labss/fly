import { render } from "../../render-vue/src/main.ts";
import Hello from "./Hello.vue";
import nodemailer from "nodemailer";

const data = {
  id: "asd",
};

const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    },
  });

  const emailHtml = await render(Hello, data);

  const options = {
    from: "",
    to: "",
    subject: "hello world",
    html: emailHtml,
  };

  transporter.sendMail(options);
};

sendEmail();
