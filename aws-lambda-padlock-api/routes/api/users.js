function getUser(){

}
module.exports.handler = async (event) => {

    //extract httpMethod
    const httpMethod = event.httpMethod; //GET POST DELETE PUT
    //Path
    const path = event.path;
    const id = event.pathParameters.user_id;
    switch(httpMethod){
        case "GET":
            //get user's data

            break;
        case "POST":
            // Register new user
            break;
        case "DELETE":
            // delete current user by id
            break;
        case "PUT":
            // if variable === password || email
            break;
    }


    const bod2 = {"mensahe": "usuarios"}
    const response = {
        statusCode: 200,
        body:JSON.stringify(event)
    }

    return response;
}