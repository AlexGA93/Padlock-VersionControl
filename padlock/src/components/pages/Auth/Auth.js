import React, { useState } from 'react';
import "./Auth.scss";

import BackgroundAuth from '../../../assets/imgs/background_resize.jpg';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { Icon } from 'semantic-ui-react';
import AuthOptions from '../../Auth/AuthOptions/AuthOptions'
import LoginForm from '../../Auth/LoginForm/LoginForm';
import RegisterForm from '../../Auth/RegisterForm/RegisterForm';


export default function Auth() {
    //state to change form
    const [selectedForm, setSelectedForm] = useState(null);
    // const { loading } = props;
    // form handler
    const handlerForm = () => {
        switch (selectedForm) {
            case "login":
                return <LoginForm setSelectedForm={setSelectedForm} />;
            case "register":
                return <RegisterForm setSelectedForm={setSelectedForm} />;
            default:
                return <AuthOptions setSelectedForm={setSelectedForm} />;
        }
    }
    return (
        <div className='auth' style={{ backgroundImage: `url(${BackgroundAuth})` }}>

            <div className='auth__box'>
                <div className='auth__box_title'>
                    <h1>Welcome To {<Icon name="shield" size='small' />}Padlock</h1>
                </div>
                {handlerForm()}
            </div>
        </div>

    )
}
