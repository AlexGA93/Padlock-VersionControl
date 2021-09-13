import React, { useState } from 'react';
import './App.scss';

import LoggedLayout from './components/layouts/Loggedlayout';
import Auth from "./components/pages/Auth";

function App() {

  // user state
  const [user, setUser] = useState(userModel);
  // loading state
  const [loading, isLoading] = useState(false);
  //reaload app component
  const [reloadApp, setReloadApp] = useState(false);

  return (
    <div className="App">
      {/* check if user is logged and render components */}
      {
        !user ? ( //user not logged
          <div className='not-user-render'>
            <Auth loading={loading} user={user} />
          </div>
        ) : ( // user logged
          <div className='user-render'>
            <LoggedLayout user={user} setReloadApp={setReloadApp} />
          </div>
        )
      }

    </div>
  );
}

export default App;


const userModel = {
  name: "Alejandro Gimeno",
  email: "alexgimat@hotmail.com",
  password: "123456789",
  age: "28"
}