const EMAIL_HASH_MODEL = require("../models/emailHash");
const mailer = require("../nodemailer");
const randomBytes = require("randombytes");
const fs = require("fs");
const path = require("path");
const config = require("config");

async function emailService(email, user, password, hash = null) {
  const pathEmailHTML = path.join(__dirname, `./auxiliaryElements/email.html`);

  function createMessage(htmlFile) {
    return {
      to: email,
      subject: "Вы успешно прошли регистрацию",
      html: htmlFile,
    };
  }

  if (hash) {
    fs.readFile(pathEmailHTML, { encoding: "utf-8" }, (err, data) => {
      let htmlFile = data;
      htmlFile = htmlFile.replace(
        "#replaceWithLink#",
        `${config.get("baseUrl")}/authentication/email?id=${hash}`
      );

      const message = createMessage(htmlFile);
      mailer(message);
    });
  } else {
    const randomEmailHash = randomBytes(16).toString("hex");
    fs.readFile(pathEmailHTML, { encoding: "utf-8" }, (err, data) => {
      let htmlFile = data;
      htmlFile = htmlFile.replace(
        "#replaceWithLink#",
        `${config.get("baseUrl")}/authentication/email?id=${randomEmailHash}`
      );

      const message = createMessage(htmlFile);
      mailer(message);
    });

    const emailHash = new EMAIL_HASH_MODEL({
      hash: randomEmailHash,
      owner: user._id,
      email: email,
      password: password,
    });

    await emailHash.save();
  }
}

module.exports = emailService;
