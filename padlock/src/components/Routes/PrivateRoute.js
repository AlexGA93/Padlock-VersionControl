import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Private route is a component that takes as props a react component dynamically, 
// authentication state and another parameters

const  PrivateRoute = ({
    component: Component,
    auth: {isAuthenticated, loading},
    ...rest
    }) => (

        <Route 
        {...rest}
        
        render={
            props => loading ? (
            <h1>SPINNER</h1>
            ):(
                isAuthenticated ? (
                    <Component {...props} />
                    
                ) : (
                    <Redirect to="/" />
                )
            )
        }

        />
        
    );
    PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
    };

    const mapStateToProps = state => ({
    auth: state.auth
    })

    export default connect(mapStateToProps)(PrivateRoute);