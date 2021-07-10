import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

const mongoClient = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const client = async (req, res) => {
  if (req.method === 'POST') {
    const { email, bookTitle } = req.body;

    if (!email || !bookTitle) {
      return res.status(400).json({
        message: 'Parameters not provided',
      });
    }

    if (!mongoClient.isConnected()) await mongoClient.connect();

    const clientsCollection = mongoClient.db('main').collection('clients');

    const client = await clientsCollection.findOne({ email });

    if (!client) {
      await clientsCollection.insertOne({ email });
    }

    const clients = await clientsCollection.find().toArray();

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
      <i>Adresy email wszystkich klientów:</i>
      ${clients.map(({ email }) => `<br/>${email}`)}
      `,
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
