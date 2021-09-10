import React from 'react';
import GenericNavbar from './GenericNavbar/GenericNavbar';
import PersonalNavbar from './PersonalNavbar/PersonalNavbar';

export default function navbar(props) {
    //extract props
    const {user} = props;

    return (
        <div>
            { !user ? (<GenericNavbar />) : (<PersonalNavbar user={user} />)}
        </div>
    )
}