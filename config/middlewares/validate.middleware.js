// middlewares/validate.middleware.js
const { body, validationResult } = require('express-validator');

// Validate phone number
exports.validatePhone = [
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .isMobilePhone().withMessage('Invalid phone number'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];

// Add more validators for task if needed
