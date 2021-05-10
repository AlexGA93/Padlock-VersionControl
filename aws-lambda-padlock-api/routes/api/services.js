module.exports.handler = async (event) => {
    const bod2 = {"mensaje": "servicios"}
    const response = {
        statusCode: 200,
        body:JSON.stringify(bod2)
    }

    return response;
}