import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Store from '../../Banners/Store/Store';
import './Home.scss';


export default function Home(props) {

    // we want to create a banners matrix of services, so we're going to create them into another component and map here an array to render them
    const [service, setService] = useState(initialStateService);
    const { user } = props;
    return (
        
        <>
        <Store service={service} user={user} />
        <h1>HOME</h1>
        </>
    )
}


const initialStateService = {
    id: "1",
    name: 'BANK ACCOUNT',
    password: 'nobodyknowsmypasshehe123@',
    bio: 'nobody knows my bank password'
}