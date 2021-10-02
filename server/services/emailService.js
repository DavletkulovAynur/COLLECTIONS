const EMAIL_HASH_MODEL = require('../models/emailHash')
const mailer = require('../nodemailer')
const randomBytes = require('randombytes')
const fs = require('fs');
const path = require("path");


async function emailService(email, user) {
  const randomEmailHash = randomBytes(16).toString('hex')

  const test = path.join(__dirname, `./auxiliaryElements/email.html`)

  fs.readFile(test, {encoding: 'utf-8'}, (err, data) => {
    let htmlFile = data;
    htmlFile = htmlFile.replace("#replaceWithLink#", `http://localhost:5000/authentication/email?id=${randomEmailHash}`)

    console.log(htmlFile)
    const message = {
      to: email,
      subject: 'test',
      html: htmlFile,
    }

    mailer(message)
  })


  const emailHash = new EMAIL_HASH_MODEL({
    hash: randomEmailHash,
    owner: user._id
  })

  await emailHash.save()
}

module.exports = emailService