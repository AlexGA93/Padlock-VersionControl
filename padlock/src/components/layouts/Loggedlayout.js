import React,{useEffect} from 'react';
// we're going to use connect to connect react componentto a redux store
import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes/Routes";

import {getCurrentProfile, deleteAccount} from "../../actions/auth"

// import Home from '../pages/Home/Home';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../LateralMenu/Sidebar/Sidebar';
import './Loggedlayout.scss';


const LoggedLayout = ({
    getCurrentProfile,
    deleteAccount,
    auth:{user},

}) => {
    
    return (
            <div className="loggedLayout">
                <h1>Service Matrix</h1>
            </div>

    ) 
}
 
LoggedLayout.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    //defining with redux structure
    isAuthenticated: state.auth.isAuthenticated,
    auth:state.auth
});

// to use redux connect method we need to pass as parameter mapStateToProps, 
// which selects the part of the data fro mthe store that the connected component needs
export default connect(mapStateToProps, {getCurrentProfile,deleteAccount})(LoggedLayout);