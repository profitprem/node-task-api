// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const { loginOrRegister } = require('../controllers/auth.controller.js');
const { validatePhone } = require('../middlewares/validate.middleware');

// POST /api/auth
router.post('/', validatePhone, loginOrRegister);

module.exports = router;
