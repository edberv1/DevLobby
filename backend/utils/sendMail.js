const nodemailer = require('nodemailer')

module.exports = async (email, subject, text) => {

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: process.env.EMAIL_PORT,
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text
    })

    console.log("Mmail sent")

  } catch (err) {
    console.log('Mail could not be sent', err)
  }
} 