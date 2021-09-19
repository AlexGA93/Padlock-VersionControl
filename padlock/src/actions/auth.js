import {setAlert} from './alert';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    //LOGIN_FAIL,
    LOGOUT,
    ACCOUNT_DELETED
    } from './types';

// importing axios to make requests
import axios from 'axios';

// functions to make a request

export const loadUser = (token) =>async dispatch =>{

    const config = {
        headers : {
            'Content-Type':'application/json',
            'x-auth-token':token
        }
    }

    await axios
    .get('/api/auth', config)
    .then(response => {
        //dispatch actions
        console.log(response);
        dispatch({
            type:USER_LOADED,
            payload:response ///object token
        });
    })
    .catch(err => {
        dispatch({
            type: AUTH_ERROR
        });
    })

}
export const register = (data) =>async dispatch => {
    
    await axios
    .post('/api/users', data)
    .then( response => {
        // console.log(response.data.token);
        let token = response.data.token;
        //dispatch actions
        dispatch({
            type:REGISTER_SUCCESS,
            payload:token ///object token
        });
        dispatch(loadUser(token));
    })
    .catch(err => {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    })
}
export const login = () =>async dispatch =>{
    try {
        // axios request
        //dispatch action to the reducer with data
    } catch (err) {
        
    }
}
export const logout = () =>async dispatch =>({type:LOGOUT})