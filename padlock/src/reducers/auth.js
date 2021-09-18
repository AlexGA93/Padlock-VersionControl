// import action types

//define an initial state
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  };


const auth = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default auth;