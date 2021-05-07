'use strict';

const hey = require('./api/routes/users');


module.exports.padlock = async (event, context, callback) => {
  console.log(event);
  let method = event.requestContext.http.method; // GET, POST, PUT, UPDATE
  let identify = JSON.parse(event.body); // user or service 
  
  
  console.log(hey);
  let cosa = " "+nodes(method,identify.type)+" <---> "+hey;

  return callback(null, {
    statsCode: 200,
    body: cosa}
  );
};


const nodes = (method,identify) =>{
  // if identify is user or not
  if(identify === 'user'){
      console.log('is a user'+method);
      return `user: ${identify} & method: ${method}`
  }else if(identify === 'service'){
      console.log('is a service');
      return `service: ${identify} & method: ${method}`
  }else{ 
      console.log('is none of them');
      return "none of them";
  }
}