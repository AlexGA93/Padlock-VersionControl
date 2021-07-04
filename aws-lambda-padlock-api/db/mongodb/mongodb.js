const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@padlockcluster.9ylqo.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;
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


const connectDB = async (dbUser, dbPass, dbName) => {
	

	await mongoose
	.connect(uri,mongooseOptions)
	.then(() => console.log('Connected to MongoDB!'))
	.catch(e => console.log(e)
	)
}

module.exports = connectDB;
	
	
