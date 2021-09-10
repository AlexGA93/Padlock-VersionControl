import React from 'react';
import {Icon} from 'semantic-ui-react';

export const sidebarData = [
    {
        title:'View Services',
        icon:<Icon name="folder open" size="small" />,
        link:'/services'
    },
    {
        title:'New Service',
        icon:<Icon name="plus" size="small" />,
        link:'/new'
    },
    {
        title:'Edit Service',
        icon:<Icon name="edit outline" size="small" />,
        link:'/edit'
    },
    {
        title:'Delete Service',
        icon:<Icon name="eraser" size="small" />,
        link:'/delete'
    },
    {
        title:'Logout',
        icon:<Icon name="power off" size="small" />,
        link:'/logout'
    }
];
