import React, {useState} from 'react';
import './App.scss';



import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/pages/Auth";
import LoggedLayout from './layouts/LoggedLayout/LoggedLayout';

import SideBar from './components/SideBar/SideBar';

function App() {
  /* declaring component states */
  
  // user state
  const [user, setUser] = useState(defaultUser()); //null or defaultUser()
  // loading state
  const [loading, isLoading] = useState(false);
  //reaload app component
  //const [reloadApp, setReloadApp] = useState(false);

  return (
    <div className="App">
      {/* check if user is logged and render components */}
      {
        !user ? ( //user not logged
          <div className='not-user-render'>
            <Navbar user={user}/>
            <Auth loading={loading} />
          </div>
        ) : ( // user logged
          <div className='user-render'>
              <Navbar user={user} className="user-render__navbar"/>
              
              {/* <LoggedLayout loading={loading} user={user} className="user-render__layout"/> */}
          </div>
        )
      }

    </div>
  );
}

export default App;


function defaultUser(){
  return {
    name:"Alejandro Gimeno",
    email:"alexgimat@hotmail.com",
    password:"Potato93@",
    age:"28"
  }
}