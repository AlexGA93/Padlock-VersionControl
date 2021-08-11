import React from 'react';
import {Button} from 'semantic-ui-react';
import './AuthOptions.scss';
export default function AuthOptions(props) {

    const {setSelectedForm} = props;

    return (
        <div className="auth_options">
            <div className="auth_options__content">
                <h2 className='title'>Welcome to Padlock<br/>
                Password  Manager!</h2>
                <div className='auth_options__content__buttons'>
                    <Button className='register' color='facebook' onClick={() => setSelectedForm('register')}>
                        Register
                    </Button>
                    <Button className='login' color='linkedin' onClick={() => setSelectedForm('login')}>
                        Login
                    </Button>
                </div>
                
            </div>
        </div>
    )
}
