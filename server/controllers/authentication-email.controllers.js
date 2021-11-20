const EMAIL_HASH_MODEL = require("../models/emailHash");
const USER_MODEL = require("../models/user");
const emailService = require("../services/emailService");
const config = require("config");
const bcrypt = require("bcryptjs");

class AuthenticationEmailControllers {
  async authenticationEmail(req, res) {
    try {
      const hash = req.query.id;
      const hashObject = await EMAIL_HASH_MODEL.findOne({ hash: hash });

      if (hashObject) {
        await USER_MODEL.updateMany(
          { _id: hashObject.owner },
          { active: true }
        );
        //FIXME: 
        await res.redirect(`http://localhost:3000?email=${hashObject.email}`);
        await EMAIL_HASH_MODEL.remove({ hash: hash });
      } else {
        await res.redirect(`http://localhost:3000`);
      }

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

  // ПРОВЕРЯЕМ HASH
  async checkHash(req, res) {
    try {
      const { email } = req.body;

      const user = await USER_MODEL.findOne({ email: email });
      if (user) {
        user.active
          ? res.status(201).json({ message: "success" })
          : res.status(201).json({ message: "no-success" });
      }
    } catch (e) {
      console.log("ERROR", e);
    }
  }
}

module.exports = new AuthenticationEmailControllers();
