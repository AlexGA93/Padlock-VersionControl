import React from 'react';
import {Image, Icon} from 'semantic-ui-react';
import './Navbar.scss';

import padlockIcon from '../../assets/icons/icons8-padlock-128.png';

export default function navbar(props) {
    //extract props
    const {user} = props;
    // console.log(user+'\n'+defaultState);
    console.log(props);

    return (
        <div>
            { !user ? simpleNavbar() : personalNavbar()}
        </div>
    )
}

// functions to render a basic navbar or a personal navbar
function simpleNavbar(){
    return(
        
        <div className='navbar'>
            <div className='navbar__padlock-icon'>
                <Image src={padlockIcon}/>
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
function personalNavbar(user){
    return(
        <div>
            <h3>Personal Navbar</h3>
        </div>
    );
}