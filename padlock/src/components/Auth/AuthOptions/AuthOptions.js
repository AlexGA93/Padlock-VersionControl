import React, {useState} from 'react';

import {Button} from 'shards-react';

import './AuthOptions.scss';

export default function AuthOptions(props) {
    const {setSelectedForm} = props;

    return (
        
        <div className="auth_options">
            <h1>Choose your option</h1>
            <div className="auth_options__buttons_box">
                
                <Button onClick={() => setSelectedForm("register")}>Register</Button> 
                <Button  onClick={() => setSelectedForm("login")} theme='info'>Log In</Button>
                
            </div>
        </div>
        
    )
}
