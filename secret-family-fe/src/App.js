import React, { useState } from "react";
import Navigation from './components/Navigation';
import SignUp from './components/SignUpForm';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import { Route, Link, Switch } from "react-router-dom";


function App() {
  const [app, setApp] = useState("");


  return (
    <div className='App'>
    <h1>Secret Family Recipie</h1>
    <Switch>
        <Route path='/signup-form'>
          <Form signup={SignUp} />
        </Route>
        <Route path='/login-page'>
          <Form login={LogIn} />
        </Route>
        <Route path='/' component={App} />
      </Switch>

    </div>
  );
}

export default App;
         