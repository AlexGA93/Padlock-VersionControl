const mongoose = require('mongoose');
const dbUser = "dbPadlockAdmin";
const dbPass = "TqmL1Zs7IOJSRiYa";
const dbName = "Padlock";

const uri = `mongodb+srv://${dbUser}:${dbPass}@padlockcluster.9ylqo.mongodb.net/${dbName}?retryWrites=true&w=majority`;

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
	mongoose
	.connect(uri,mongooseOptions)
	.then(() => console.log('Connected to MongoDB!'))
	.catch(e => console.log(e)
	)
}

module.exports = connectDB;
	
	
