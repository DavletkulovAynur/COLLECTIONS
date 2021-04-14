const EMAIL_HASH_MODEL = require('../models/emailHash')
const mailer = require('../nodemailer')
const randomBytes = require('randombytes')


async function emailService(email, user) {
  const randomEmailHash = randomBytes(16).toString('hex')
  const message = {
    to: email,
    subject: 'test',
    html: `
			<h2>Поздравляем</h2>
			ваш  email ${email}
			<a href="http://localhost:5000/authentication/email?id=${randomEmailHash}">test</a>
		`
  }
  mailer(message)

  const emailHash = new EMAIL_HASH_MODEL({
    hash: randomEmailHash,
    owner: user._id
  })

  await emailHash.save()
}

module.exports = emailService