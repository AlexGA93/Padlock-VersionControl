import React ,{useState}from 'react';
import "./Auth.scss";

import AuthOptions from '../Auth/AuthOptions/AuthOptions'
import LoginForm from '../Auth/LoginForm/LoginForm';
import RegisterForm from '../Auth/RegisterForm/RegisterForm';

export default function Auth(props) {
    //state to change form
    const [selectedForm, setSelectedForm] = useState(null);

    const {loading} = props;
    // form handler
    const handlerForm = () => {
        switch(selectedForm){
            case "login":
               return <LoginForm setSelectedForm={setSelectedForm}/>;
            case "register":
               return <RegisterForm setSelectedForm={setSelectedForm}/>;
            default:
               return <AuthOptions setSelectedForm={setSelectedForm}/>;
        }
    }
    return (
        <div className='auth'>
            <div className='auth__box'>
                <div className='auth__box_title'>
                    <h1>Welcome To Padlock</h1>
                </div>
                {handlerForm()}
            </div>
        </div>
    )
}
