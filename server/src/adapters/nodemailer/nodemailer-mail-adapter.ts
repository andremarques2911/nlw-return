import nodemailer from "nodemailer";
import { MailAdapter, SendEmailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1e619042e9decc",
    pass: "3acada0bbdf4ec"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendEmailData) {

    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "André Luiz Marques <andregfpa@gmail.com>",
      subject,
      html: body
    });
  }
}
