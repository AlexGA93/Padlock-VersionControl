import React, {useState} from 'react';
import './App.scss';



import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/pages/Auth";

function App() {
  /* declaring component states */
  
  // user state
  const [user, setUser] = useState(false);
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
              <Navbar user={user}/>
              <p>Personal Navbar and logged component</p>
          </div>
        )
      }

    </div>
  );
}

export default App;
