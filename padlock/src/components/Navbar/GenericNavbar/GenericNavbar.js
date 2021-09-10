import React from 'react';
import {Image, Icon} from 'semantic-ui-react';

import "./GenericNavbar.scss";
export default function GenericNavbar() {
    return(
        
        <div className='navbar'>
            <div className='navbar__padlock-icon'>
                {/* <Image src={padlockIcon}/> */}
                <Icon name="shield" size='big' />
                <h3 className ="icon-name">Padlock</h3>
            </div>
            <div className='navbar__list'>
                <ul className="navbar__list__social">
                    <li className ='navbar__list_item'>
                        <a href="https://github.com/AlexGA93/Padlock-VersionControl/blob/docker-version/README.md">
                            <Icon name="book" size='big' />
                        </a>
                    </li>
                    <li className ='navbar__list_item'>
                        <a href="https://github.com/AlexGA93/Padlock-VersionControl/tree/ClientPadlock">
                            <Icon name="github" size='big' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
