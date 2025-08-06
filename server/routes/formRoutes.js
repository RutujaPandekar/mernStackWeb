const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/formController');
const auth = require('../middleware/authMiddleware');

router.post('/submit-form', auth, submitForm);

module.exports = router;