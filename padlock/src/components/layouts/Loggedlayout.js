import React from 'react';
// we're going to use connect to connect react componentto a redux store
import {connect} from 'react-redux';

import PropTypes from 'prop-types';


import { BrowserRouter as Router } from "react-router-dom";


import Routes from '../Routes/Routes';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../LateralMenu/Sidebar/Sidebar';
import './Loggedlayout.scss';


const LoggedLayout = ({setReloadApp, isAuthenticated ,user}) => {
    console.log(user);
    return (
        <Router>
            <div className="loggedLayout">
                <Navbar user={user}/>
                <Sidebar />
                <Routes user={user} />
            </div>
        </Router>
    )
}

LoggedLayout.propTypes = {
    setReloadApp: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    //defining with redux structure
    isAuthenticated: state.auth.isAuthenticated
});

// to use redux connect method we need to pass as parameter mapStateToProps, 
// which selects the part of the data fro mthe store that the connected component needs
export default connect(mapStateToProps)(LoggedLayout);