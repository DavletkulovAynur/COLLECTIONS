const EMAIL_HASH_MODEL = require("../models/emailHash");
const USER_MODEL = require("../models/user");
const emailService = require("../services/emailService");
const config = require("config");

class AuthenticationEmailControllers {
  async authenticationEmail(req, res) {
    try {
      const hash = req.query.id;
      const email = await EMAIL_HASH_MODEL.findOne({ hash: hash });
      if (email) {
        await USER_MODEL.updateMany({ _id: email.owner }, { active: true });
        await EMAIL_HASH_MODEL.remove({ hash: hash });
      }
      // FIXME: 
      // TODO: должен вести сразу на страницу
      // без ввода пароля
      res.redirect(`http://localhost:3000`);
      // res.redirect(config.get("baseUrl"));
    } catch (e) {
      console.log("Error", e);
    }
  }

  async authenticationEmailResending(req, res) {
    try {
      const userId = req.user.id;
      const user = await EMAIL_HASH_MODEL.find({ owner: userId });

      const { email, password, hash } = user[0];

      await emailService(email, user, password, hash);
      res.status(201).json({ message: "success", status: true });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new AuthenticationEmailControllers();
