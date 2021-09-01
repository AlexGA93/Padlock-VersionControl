module.exports.getUserByToken = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'getUserByToken',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}

module.exports.authenticateUser = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'authenticateUser',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}