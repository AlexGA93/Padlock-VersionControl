import React from 'react';
import {Icon} from 'semantic-ui-react';

import SideBar from '../../SideBar/SideBar';
import './PersonalNavbar.scss';

export default function PersonalNavbar(props) {
    const {user} = props;
    return(
        <div className='navbar'>
            <div className='navbar__padlock-icon'>
                <Icon name="shield" size='big' />
                <h3 className ="icon-name">{user.name}</h3>
            </div>

            <div className='navbar__list'>
                {/* <LateralMenu /> */}
                

            </div>
            
        </div>
    );
}
