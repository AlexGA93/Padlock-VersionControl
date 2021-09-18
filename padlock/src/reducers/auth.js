// import action types
/*
REGISTER_SUCCESS,
//REGISTER_FAIL,
USER_LOADED,
AUTH_ERROR,
LOGIN_SUCCESS,
//LOGIN_FAIL,
LOGOUT,
ACCOUNT_DELETED
*/
//define an initial state
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  };


const auth = (state=initialState, action) => {

    // extracting type and payload from action
    const {type, payload} = action;

    switch(type){
        // user loaded returns our state, the rquest user data and details
        case "USER_LOADED":
        return { 
            ...state,
            isAuthenticated: true,
            loading: false,
            user: payload
        };
        // user registered or logged will return our state and the payload content
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
              };
        // If any error case or deleted account will delete our state info
        case "ACCOUNT_DELETED":
        case "AUTH_ERROR":
        case "LOGOUT":
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        // default state will return the main state
        default:
            return state;
    }
}

export default auth;