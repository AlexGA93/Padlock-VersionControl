'use strict';
const nodes = require('./api/routes/nodes');

module.exports.padlock = async (event, context, callback) => {
  console.log(event);
  let method = event.requestContext.http.method; // GET, POST, PUT, UPDATE
  let identify = JSON.parse(event.body); // user or service 
  nodes(method,identify.type);
  
  
  //let body = JSON.parse(event.body);
  //console.log(body));// extracting data as json from json-stringified(lol)
  //let {name, email, password, age} = body;


  return callback(null, {
    statsCode: 200,
    body: identify.type}
  );
};


