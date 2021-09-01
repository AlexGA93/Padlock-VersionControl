const mongoose = require("mongoose");
require('dotenv').config();

const uri = `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@padlockcluster.fhtcf.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;

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