// import action types

//define an initial state
const initialState = {
    service: null,
    services: [],
    loading: true,
    error: {}
  };

/*

GET_SERVICES
*/
const service = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case "GET_SERVICE":
        case "UPDATE_SERVICE":
            return {
                ...state,
                service: payload,
                loading: false,
                error:{}
            }
        case"GET_SERVICES":
            return {
                ...state,
                services:payload,
                loading:false,
                error:{}
            }
        case "SERVICE_DELETED":
        case "SERVICE_ERROR":
            return {
                ...state,
                service:null,
                loading:false,
                services:[],
            }
        default:
            return state;
    }
}

export default service;