import { render } from "@fly-email/render-react";
import nodemailer from "nodemailer";

import App from "./index";

(async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    },
  });

  const emailHtml = await render(<App />);

  console.log(emailHtml);

  const options = {
    from: "",
    to: "",
    subject: "hello world",
    html: emailHtml,
  };

  transporter.sendMail(options);
})();
