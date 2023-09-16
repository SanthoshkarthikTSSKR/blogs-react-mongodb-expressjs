const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./blogs.js');
const cors = require('cors');

const app = express();
const PORT = 5000;
const MONG_URI = "mongodb+srv://<user>:<password>@cluster0.zysahhr.mongodb.net/BLOGS?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(MONG_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

app.use('/api', itemRoutes);
