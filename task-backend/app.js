const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://admin:admin123@mongodb:27017/tasks?authSource=admin' , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('Task API listening on port 3000');
});
