import React from 'react';
import {Icon} from 'semantic-ui-react';

import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import './Navbar.scss';

const PersonalNavbar = ({isAuthenticated, auth:{user}}) => {
    const state = useSelector(state => state.auth.user.data)
    // console.log('NAV: \n'+user);
    return(
        <div className='personal-navbar'>
            <div className='personal-navbar__padlock-icon'>
                <Icon name="shield" size='big' />
                <h3 className ="icon-name">{state.name}</h3>
            </div>
        </div>
    );
}

PersonalNavbar.propTypes = {
    isAuthenticated: PropTypes.bool,
    auth:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    //defining with redux structure
    isAuthenticated: state.auth.isAuthenticated,
    auth:state.auth
});

export default connect(mapStateToProps)(PersonalNavbar);