const Form = require('../models/formModel');

const submitForm = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({ error: 'Invalid input' });
    }
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { submitForm };
