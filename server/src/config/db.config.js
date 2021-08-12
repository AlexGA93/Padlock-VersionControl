const mongoose = require("mongoose");
require('dotenv').config();


mongoose.connect('mongodb://database:27017/mydatabase',
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