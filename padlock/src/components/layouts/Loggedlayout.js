import React,{useEffect} from 'react';
// we're going to use connect to connect react componentto a redux store
import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import { setAlert } from '../../actions/alert';
import {loadUser} from '../../actions/auth';
// import {deleteAcount} from '../../actions/service';
import Home from '../pages/Home/Home';
// import Routes from '../Routes/Routes';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../LateralMenu/Sidebar/Sidebar';
import './Loggedlayout.scss';


const LoggedLayout = ({
    // loadUser,
    // setAlert,
    // isAuthenticated,
    //deleteAccount,
    // auth:{user}
}) => {
    // extracting store data
    const data = useSelector(state => state);
    console.log(data.auth.user.data);
    return (

            <div className="loggedLayout">
                <Navbar />
                <Sidebar />
                <Home />
            
            {/* <h1> LoggedLayout</h1> */}
            </div>

    ) 
}
 
LoggedLayout.propTypes = {
    setAlert: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    //defining with redux structure
    isAuthenticated: state.auth.isAuthenticated,
    auth:state.auth
});

// to use redux connect method we need to pass as parameter mapStateToProps, 
// which selects the part of the data fro mthe store that the connected component needs
export default connect(mapStateToProps, {setAlert,loadUser})(LoggedLayout);