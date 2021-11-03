const nodemailer = require('nodemailer')

const email = 'collection-2000@mail.ru'
const pass = '9qMnfd5JKxNfrZrL8yV2'

const poolConfig = `smtps://${email}:${pass}@smtp.mail.ru/?pool=true`

const transporter = nodemailer.createTransport(
    poolConfig,
  {
    from: `COLLECTION <${email}>`,
  })

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if(err) return console.log(err)
    console.log('Email sent: ', info)
  })
}

module.exports = mailer

