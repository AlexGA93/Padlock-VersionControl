module.exports.signupUser = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'signupUser',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}

module.exports.deleteUser = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'deleteUser',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}