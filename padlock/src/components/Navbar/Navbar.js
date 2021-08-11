import React from 'react';
import { List , Image } from 'semantic-ui-react'
import padlockIcon from '../../assets/imgs/icons/icons8-padlock-128.png';

import "./Navbar.scss";

export default function Navbar(props) {

    //extract props info
    const {user, defaultState} = props;

    return (
        <div>
            {!defaultState? navbarLoaded(user) : navbarSimple()}
        </div>
    )
}


function navbarSimple(){
    return(
        <div className="navbar">
            <div className="navbar__icon">
                <Image src={padlockIcon} />
            </div>
            <div className="navbar__content">
                <h3 className="navbar__content__title">Padlock</h3>
            </div>
        </div>
    );
}
/*
icons:
user
folder(open service)
plus(add new)
edit
delete
*/
function navbarLoaded(user){

    return(
        <div className="navbar">
            <div className="navbar__icon">
                <Image src={padlockIcon} />
            </div>
            <div className="navbar__content">
                <ul className="navbar__content__list" >
                    <li>Open Service</li>
                    <li>New Service</li>
                    <li>Edit Service</li>
                    <li>Delete Service</li>
                </ul>
            </div>
        </div>
    );
}

/*
<List>
                    <List.Iteam>Open Service</List.Iteam>
                    <List.Iteam>New Service</List.Iteam>
                    <List.Iteam>Edit Service</List.Iteam>
                    <List.Iteam>Delete Service</List.Iteam>
                </List>
*/