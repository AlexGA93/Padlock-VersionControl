import React, { useState } from 'react';
import './App.scss';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LoggedLayout from './components/layouts/Loggedlayout';
import Auth from "./components/pages/Auth";



function App({isAuthenticated, user}) { //passed as props a auth reducer initial state

  // loading state
  // const [loading, isLoading] = useState(false);
  //reaload app component
  const [reloadApp, setReloadApp] = useState(false);

  //react Hook to load user if there is
  
  // console.log(user);
  return (
    <div className="App">
      {/* check if user is logged and render components */}
      {
        !user ? ( //user not logged
          <div className='not-user-render'>
            <Auth user={user} />
          </div>
        ) : ( // user logged
          <div className='user-render'>
            <LoggedLayout user={user} />
          </div>
        )
      }

    </div>
  );
}



// validating props type as boolean
App.propTypes = {
  isAuthenticated: PropTypes.bool,
  user:PropTypes.object
}

// selecting the part of the data from the store that the connected component needs.
const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated,
  user:state.auth.user
});


export default connect(mapStateToProps)(App);