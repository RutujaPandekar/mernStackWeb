const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/formDB')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use('/api', formRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
