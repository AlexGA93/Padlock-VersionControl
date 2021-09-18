// combining reducers
import {combineReducers} from 'redux';

// importing reducers
import alert from './alert';
import auth from './auth';
import service from './service';

export default combineReducers({
    alert,
    auth,
    service
});

