import React,{useEffect} from 'react';
// we're going to use connect to connect react componentto a redux store
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import { BrowserRouter as Router } from "react-router-dom";

import {loadUser} from '../../actions/auth';
// import {deleteAcount} from '../../actions/service';

// import Routes from '../Routes/Routes';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../LateralMenu/Sidebar/Sidebar';
import './Loggedlayout.scss';


const LoggedLayout = ({
    loadUser,
    //deleteAccount,
    auth:{user},
    service:{service}
}) => {

    useEffect(() => {
        loadUser();
    }, [loadUser]);


    console.log(user);
    return (
        <Router>
            {/* <div className="loggedLayout">
                <Navbar user={user}/>
                <Sidebar />
                <Routes user={user} />
            </div> */}
            <h1>LoggedLayout</h1>
        </Router>
    )
}

LoggedLayout.propTypes = {
    // getCurrentProfile: PropTypes.func.isRequired,
    // deleteAccount: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired,
    // service: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    //defining with redux structure
    isAuthenticated: state.auth.isAuthenticated
});

// to use redux connect method we need to pass as parameter mapStateToProps, 
// which selects the part of the data fro mthe store that the connected component needs
export default connect(mapStateToProps, {loadUser})(LoggedLayout);