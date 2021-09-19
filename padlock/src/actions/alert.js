
import {SET_ALERT, REMOVE_ALERT} from './types';

// defining action to setan alert
export const setAlert = (
    msg, // we passed an message
    alertType, // the action type
    timeout = 5000 //a timeout in ms
    ) => dispatch =>{
        // dispatch action to the reducer
        dispatch({
            type:SET_ALERT,
            payload:{msg, alertType}
        });

        // we want to cancel our alert state 5 seconds after it will be dispatched
        setTimeout(() => dispatch({
            type: REMOVE_ALERT,
            payload:""
        }), timeout);
}