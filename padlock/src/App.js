import React, {useState} from "react";

// We're going to use Toastify to deal with alerts
import {ToastContainer} from 'react-toastify'

import Navbar from "./components/Navbar/Navbar";
import Auth from './pages/Auth';

import './App.scss';

function App() {
  // states to deal with user himself, default value is null
  const [user, setUser] = useState(null);
  //states to deal with loading component and state. 
  const [isLoading, setIsLoading] = useState(null);
  //state to reload page
  const [reloadApp, setReloadApp] = useState(false);
  //nabvar props
  const [defaultState, setDefaultState] = useState(false);


  //if we're not loading, set to null
  if (isLoading) return null;
  
  const handlerNavbar = () => {
    !user ? setDefaultState(false) : setDefaultState(true)
  }

  return (
    <>
      <div className='app'> 
        {
          !user ? (
            <div>
              <Navbar setDefaultState={handlerNavbar} defaultState={defaultState}/>
              <Auth />
            </div>
            
          ) : (
            <div>
              <Navbar setDefaultState={handlerNavbar} user={user} defaultState={defaultState}/>
              <h2>Calling 'LoggedLayout' component wit ha prop of setReloadApp=setReloadApp</h2>
            </div>
            
          )
        }
        <ToastContainer
          position="top"
          autoClose={1000}
          hideProgressBar={false}
          rtl={false}
          pauseOnFocusLoss
          dragabble
          pauseOnHover
        />
      </div>
    </>
  );
}

export default App;
