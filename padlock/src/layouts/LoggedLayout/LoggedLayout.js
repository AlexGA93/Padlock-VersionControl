import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import './LoggedLayout.scss';
import { Label } from 'semantic-ui-react';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
export default function LoggedLayout(props) {
    return (
        <div className="loggedLayout">
            <h1>LOGGED LAYOUT</h1>
            {/* <Admin dataProvider={dataProvider} /> */}
        </div>
    )
}
