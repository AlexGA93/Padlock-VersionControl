import React from 'react';
import {Route, Redirect} from 'react-router-dom';


// Private route is a component that takes as props a react component dynamically, 
// authentication state and another parameters

const  PrivateRoute = ({
    component: Component,
    auth: {isAuthenticate, loading},
    ...rest
}) => {
    return (
        <Route
        // passing as props the rest of the parent component props
        {...rest}
        // It will render the component passed as prop if user is logged or not
        render={ 
            props => !isAuthenticate && !loading ? (
                // if user is not logged redirect to login route
                <Redirect to="/login" />
            ) : (
                // if user is logged render a component with the props passed as props in the parent
                <Component {...props} />
            )
         }
        />
    );
}

export default PrivateRoute
