// controllers/auth.controller.js
const User = require('../models/user.model.js');
const generateToken = require('../utils/generateToken.js');

exports.loginOrRegister = async (req, res) => {
  const { phone } = req.body;

  let user = await User.findOne({ phone });

  if (!user) {
    user = await User.create({ phone });
  }

  const token = generateToken(user._id);
console.log("token: "+ token);
  res.json({ user, token });
};
