'use strict';

module.exports.padlock = async (event, context, callback) => {

  const message = `WELCOME TO ${process.env.dbTest}`;

  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        input: event,
      },
      null,
      2
    ),
  };

  return callback(null, response)// (null,response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
