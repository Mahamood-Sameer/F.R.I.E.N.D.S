import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import SideNav from './Components/SideNav';
import Chatspace from './Components/Chatspace';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './Components/SignUp';
import { auth } from './Firebase';

function App() {


  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      }
      else {
        setUser(null)
      }
    })
  }, [user])


  return (
    <BrowserRouter>
      {
        !user ? <SignIn /> :
          <div className="app">
            <Header user={user}/>
            <Switch>
              <div className="app__contents">
                <SideNav user={user}/>
                <Route path="/" exact>
                    <div className="conversation__info">
                          <h1>Start the Conversation by Selecting the channel</h1>
                    </div>
                </Route>
                <Route path="/Channel/:channel">
                  <Chatspace user={user}/>
                </Route>
              </div>
            </Switch>

          </div>
      }

    </BrowserRouter>

  );
}

export default App;
