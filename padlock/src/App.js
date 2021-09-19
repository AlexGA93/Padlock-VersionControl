import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import Auth from "./components/pages/Auth";
import LoggedLayout from './components/layouts/Loggedlayout';

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
          <Switch>
            <Route exact path="/">
              <Auth />
            </Route>
            <Route>
              <LoggedLayout />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
