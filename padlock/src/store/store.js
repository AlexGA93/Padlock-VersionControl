// importing redux core
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// importing combined reducers
import index from '../reducers/index';

const initialState={};
const middleware = [thunk];

const store = createStore(
    index,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;