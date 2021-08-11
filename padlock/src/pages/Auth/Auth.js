import React, {useState} from 'react';

import Login from "../../components/Auth/Login/Login";
import Register from "../../components/Auth/Register/Register";
import AuthOptions from '../../components/Auth/AuthOptions/AuthOptions';
import LogoShieldPadlock from "../../assets/imgs/icons/win10shield.png";

import "./Auth.scss";

export default function Auth() {
    /*
    We want to choose between 3 different forms:
        1. Log In
        2. Register
        3. Auth Options
    */
    const [selectedForm, setSelectedForm] = useState(null);
    

    //function to render forms by prop created
    const handlerForm = () => {
        switch(selectedForm){
            case "login":
                return <Login setSelectedForm={setSelectedForm}/>;
            case "register":
                return <Register setSelectedForm={setSelectedForm}/>;
            default:
                return <AuthOptions setSelectedForm={setSelectedForm}/>
        }
    }


    return (
        <div className="auth">
            <div className="auth__blue" />
            <div className="auth__box">
                {handlerForm()}
            </div>
        </div>
    );
}
