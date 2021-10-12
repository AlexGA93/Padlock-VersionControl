import {setAlert} from './alert';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT,
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
    .get('/api/auth/', config)
    .then(response => {
        //dispatch actions
        // console.log('DATA:'+response);
        dispatch({
            type:USER_LOADED,
            payload:response ///object user
        });
    })
    .catch(err => {
        dispatch({
            type: AUTH_ERROR
        });
    })

}
export const register = (data) =>async dispatch => {
    // header
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }
    await axios
    .post('/api/users/', data, config)
    .then( response => {
        // console.log(response.data.token);
        //dispatch actions
        dispatch({
            type:REGISTER_SUCCESS,
            payload:response.data.token ///object token
        });
        dispatch(loadUser(response.data.token));
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
export const login = (user) =>async dispatch =>{
    // console.log(user);
    // header
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }
    await axios
    .post("/api/auth/", user, config)
    .then(response =>{
        // console.log(response);
        //dispatch actions
        dispatch({
            type:LOGIN_SUCCESS,
            payload:response.data.token ///object token
        });
        dispatch(loadUser(response.data.token));
    })
    .catch(err=>{
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: AUTH_ERROR
        });
    })
}
export const logout = () =>async dispatch =>({type:LOGOUT})