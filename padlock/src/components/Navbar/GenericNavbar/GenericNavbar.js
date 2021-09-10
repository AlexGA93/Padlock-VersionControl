
import React from 'react';
import {Icon} from 'semantic-ui-react';

import "./GenericNavbar.scss";
export default function GenericNavbar() {
    return(
        
        <div className='generic-navbar'>
            <div className='generic-navbar__padlock-icon'>
                {/* <Image src={padlockIcon}/> */}
                <Icon name="shield" size='big' />
                <h3 className ="icon-name">Padlock</h3>
            </div>
            <div className='generic-navbar__list'>
                <ul className="generic-navbar__list__social">
                    <li className ='navbar__list_item'>
                        <a href="https://github.com/AlexGA93/Padlock-VersionControl/blob/docker-version/README.md">
                            <Icon name="book" size='big' />
                        </a>
                    </li>
                    <li className ='generic-navbar__list_item'>
                        <a href="https://github.com/AlexGA93/Padlock-VersionControl/tree/ClientPadlock">
                            <Icon name="github" size='big' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}