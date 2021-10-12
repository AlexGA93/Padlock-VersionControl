import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

//Components - Pages
// import AuthOptions from '../Auth/AuthOptions/AuthOptions';
import LoginForm from '../Auth/LoginForm/LoginForm';
import RegisterForm from '../Auth/RegisterForm/RegisterForm';
import Newservice from "../pages/NewService/Newservice";
import NotFound from '../pages/NotFound/NotFound';
import Loggedlayout from '../layouts/Loggedlayout';

const Routes = () => {
    return (
        <Switch>
            {/* <Route exact path="/" component={AuthOptions} /> */}
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
            
            
            <PrivateRoute exact path="/layout" component={Loggedlayout} />
            <PrivateRoute exact path="/service/new" component={Newservice} />
            {/* <PrivateRoute exact path="/service/edit/:service_id" component={<h1>edit service by id Card</h1>} /> */}
            <PrivateRoute exact path="/service/:service_id " component={<h1>view service by id</h1>} />

            {/* <PrivateRoute exact path="/user/edit/:id" component={<h1>Edit User</h1>} /> */}
            {/* Not Found */}
            <Route component={NotFound} />
        </Switch>
    )
}


export default Routes;