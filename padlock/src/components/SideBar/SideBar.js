import React from 'react';
import {Image, Icon} from 'semantic-ui-react';

// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { sidebarData, SidebarData } from '../SideBarData/SidebarData';
import './SideBar.scss';
/*
Sub Menus:
    1. Open Services
    2. Add new Service
    3. Edit Service
    4. Delete Service

    5.Log Out->Modal
*/ 
export default function sideBar() {
    
    return(
        <div className="sidebar">
            <ul className="sidebar_list">
                {sidebarData.map((val, key)=>{
                    return(
                        <li key={key} className='row'>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>{" "}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
    
}
