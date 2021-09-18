import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

//Components - Pages
// import AuthOptions from '../Auth/AuthOptions/AuthOptions';
import LoginForm from '../Auth/LoginForm/LoginForm';
import RegisterForm from '../Auth/RegisterForm/RegisterForm';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

const Routes = () => {
    return (
        <Switch>
            {/* <Route exact path="/" component={AuthOptions} /> */}
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
                
            {/* Private Routes
            /dashboard                --> Dashboard --> 
            /create_service           --> Create Service Form
            /edit_service/:service_id --> Edit Service
            /view_service/:id         --> Service Card
            */}
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/create_service" component={<h1>create service</h1>} />
            <PrivateRoute exact path="/edit_service/:service_id" component={<h1>edit service by id</h1>} />
            <PrivateRoute exact path="/view_service/:id " component={<h1>view service by id</h1>} />
            {/* Not Found */}
            <Route component={NotFound} />
        </Switch>
    )
}


export default Routes;