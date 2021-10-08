const EMAIL_HASH_MODEL = require("../models/emailHash");
const USER_MODEL = require("../models/user");
const emailService = require("../services/emailService");


class AuthenticationEmailControllers {

  async authenticationEmail(req, res) {
    try {
      const hash = req.query.id
      const email = await EMAIL_HASH_MODEL.findOne({hash: hash})
      if (email) {
        await USER_MODEL.update({_id: email.owner}, {active: true})
        res.redirect('http://localhost:3000/')
        await EMAIL_HASH_MODEL.remove({hash: hash})
      }

    } catch (e) {
      console.log('Error', e)
    }
  }

  async authenticationEmailResending(req, res) {
    try {
      console.log(req.user.id)
      const userId = req.user.id
      const user = await EMAIL_HASH_MODEL.find({owner: userId})

      const {email, hash} = user[0]

      console.log(email, hash)
      await emailService(email, user, hash)
      res.status(201).json({message: 'success', status: true})
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new AuthenticationEmailControllers()