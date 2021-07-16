const express = require('express');
const app = express();
//  deal with environment variables
require('dotenv').config();
// databse interaction
require('./db/mongodb');

// middleware
app.use(
    express.json({
        extended: false
    })
);

// Initial Route
app.get('/', (req,res)=>{
    res.send('API running')
});
app.use(express.json());

// routes
app.use('/user',require('./Routes/api/users'));
app.use('/service',require('./Routes/api/services'));

// api listening
const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`API running at port ${port}`);});
