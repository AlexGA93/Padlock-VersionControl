import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";


import Routes from '../Routes/Routes';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../LateralMenu/Sidebar/Sidebar';
import './Loggedlayout.scss';


export default function LoggedLayout(props) {
    const {user, setReloadApp} = props;
    console.log(user);
    return (
        <Router>
            <div className="loggedLayout">
                <Navbar user={user}/>
                <Sidebar />
                <Routes user={user} />
            </div>
        </Router>
    )
}