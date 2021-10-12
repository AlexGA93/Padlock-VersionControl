import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/pages/Auth";
import Routes from "./components/Routes/Routes";

import { loadUser } from './actions/auth';
import store from './store/store';

const App = () => { //passed as props a auth reducer initial state
  //using UseEffect hook to render a component or another
  useEffect(
    () => {store.dispatch(loadUser())}
  , []);

  return (
  
    <Provider store={store}>
      <Router>
        <Fragment> 
          <Navbar />
          <Switch>
            <Route exact path="/" component={Auth}/ >
            <Route component={Routes}/>
          </Switch>
        </Fragment>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </Provider>
      
     
      
    
  )
}

export default App;
