import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components - Pages

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact >
                <h2>Personal Page</h2>
            </Route>
            <Route path="/view" exact >
                <h2>Visualize Services</h2>
            </Route>
            <Route path="/add" exact >
                <h2>Add New Service</h2>
            </Route>
            <Route path="/edit" exact >
                <h2>Edit Service</h2>   
            </Route>
            <Route path="/delete" exact >
                <h2>Delete Service</h2>
            </Route>
            <Route path="/logout" exact >
                <h2>Logout</h2>
            </Route>
        </Switch>
    )
}
