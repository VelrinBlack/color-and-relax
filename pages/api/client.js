import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const client = async (req, res) => {
  if (req.method === 'POST') {
    const { email, bookTitle } = req.body;

    if (!email || !bookTitle) {
      return res.status(400).json({
        message: 'Parameters not provided',
      });
    }

    const emailAddressesFilePath = path.resolve('utils', 'emailAddresses.txt');

    if (!fs.readFileSync(emailAddressesFilePath, 'utf8').match(email)) {
      fs.appendFileSync(emailAddressesFilePath, email + '\n');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'emailsender4265@gmail.com',
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: '"Email sender" <emailsender4265@gmail.com>',
      to: 'demytpl@gmail.com',
      subject: 'Nowy klient',
      html: `
      <b>Adres email</b>: ${email}
      <br/>
      <b>Tytuł książki</b>: ${bookTitle}
      <br/><br/>
      <i>W załączniku znajduje się lista adresów email wszystkich klientów</i>
      `,
      attachments: [
        {
          filename: 'adresy.txt',
          path: emailAddressesFilePath,
        },
      ],
    });

    res.status(200).json({ message: 'Success' });
  } else {
    res.writeHead(302, {
      Location: '404',
    });
    res.end();
  }
};

export default client;
