const nodemailer = require('nodemailer')

const defaultConfig = "smtps://testsendmail2@mail.ru:Sendmail3@smtp.mail.ru"

const poolConfig = "smtps://testsendmail2@mail.ru:Sendmail3@smtp.mail.ru/?pool=true"

const transporter = nodemailer.createTransport(
    poolConfig,
  {
    from: 'Mailer test <testsendmail2@mail.ru>',
  })

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if(err) return console.log(err)
    console.log('Email sent: ', info)
  })
}

module.exports = mailer