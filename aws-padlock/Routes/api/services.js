module.exports.newService = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'newService',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}

module.exports.getServiceById = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'getServiceById',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}

module.exports.deleteService = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'deleteService',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}

module.exports.changeServiceName = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'changeServiceName',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}

module.exports.deletechangeServicePassUser = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'changeServicePass',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}

module.exports.changeServiceBio = async (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'changeServiceBio',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}