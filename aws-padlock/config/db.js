const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.dbUri;

mongoose.connect(uri,
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