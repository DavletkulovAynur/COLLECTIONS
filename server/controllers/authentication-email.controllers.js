const EMAIL_HASH_MODEL = require("../models/emailHash");
const USER_MODEL = require("../models/user");

class AuthenticationEmailControllers {

  async authenticationEmail(req, res) {
    try {
      console.log('email2')
      const hash = req.query.id
      console.log('hash', hash)
      const email = await EMAIL_HASH_MODEL.findOne({hash: hash})
      if (email) {
        await USER_MODEL.update({_id: email.owner}, {active: true})
        res.redirect('http://localhost:3000/')
        await EMAIL_HASH_MODEL.remove({hash: hash})
      }

    } catch (e) {
      console.log('email3')
      console.log('Error', e)
    }
  }
}

module.exports = new AuthenticationEmailControllers()