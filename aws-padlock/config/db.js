const mongoose = require("mongoose");
require('dotenv').config();

const uri = `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@padlockcluster.fhtcf.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;
const mongooseOptions = 
{
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false, 
	reconnectTries: 30, 
	reconnectInterval: 500, 
	poolSize: 1, 
	socketTimeoutMS: 2000000, 
	keepAlive: true
}

const connectDB = async () => {
  await mongoose
  .connect(uri, mongooseOptions)
    .then(() => console.log(`connected to MongoDB!`))
    .catch(err => {
      console.error(err);
    });
}

module.exports = connectDB;