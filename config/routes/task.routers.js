// routes/task.routes.js
const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  updateTask
} = require('../controllers/task.controller');

const { protect } = require('../middlewares/auth.middleware');

// Task routes - all protected
router.post('/', protect, createTask);
router.get('/', protect, getTasks);
router.put('/:id', protect, updateTask);

module.exports = router;
