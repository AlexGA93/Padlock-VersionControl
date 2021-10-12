import React from 'react';
import {Icon} from 'semantic-ui-react';
import {connect, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.scss';
import { toast } from 'react-toastify';

// sidebar test
import Sidebar from '../LateralMenu/Sidebar/Sidebar';

const PersonalNavbar = ({isAuthenticated}) => {
    //toast.success('Logging in')
    const state = useSelector(state => state.auth.user.data)
    //console.log(isAuthenticated);
    //console.log(state);
    return(
    <div className='personal-navbar'>   
        <div className='personal-navbar__padlock-icon'>
            <Icon className="icon-shield" name="shield" size='large' />
            <Link to="/">
                 <p className ="icon-name">Padlock</p>
            </Link>
           
            {isAuthenticated ? (<Sidebar />) : ("")}
        </div>
    </div>
    );
}

PersonalNavbar.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    //defining with redux structure
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PersonalNavbar);