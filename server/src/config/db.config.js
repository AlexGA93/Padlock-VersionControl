const mongoose = require("mongoose");
require('dotenv').config();

const db = 'mongodb://database:27017/mydatabase';

mongoose.connect(db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`connected to MongoDB!`))
  .catch(err => {
    console.error(err);
    process.exit();
  });