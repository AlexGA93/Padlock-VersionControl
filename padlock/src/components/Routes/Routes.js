import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components - Pages
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
export default function Routes(props) {
    const { user } = props;
    return (
        <Switch>
            <Route path="/register">
                <h1>Register Form Component</h1>
            </Route>
            <Route path="/login">
                <h1>Login Form Component</h1>
            </Route>
            <Route path="/profiles">
                <h1>Porfiles Component</h1>
            </Route>
            <Route path="/profile/:id">
                <h1>Profile Component by Id</h1>
            </Route>
            {/* Private Routes */}

            {/* Not Found */}
            <Route component={NotFound} />
        </Switch>
    )
}
