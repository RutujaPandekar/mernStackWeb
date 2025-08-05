const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  yourDetails: { name: String, email: String },
  education: Object,
  family: Object,
  others: Object
});

module.exports = mongoose.model('Form', formSchema);
