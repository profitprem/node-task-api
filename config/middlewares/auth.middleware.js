// middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-__v');
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
