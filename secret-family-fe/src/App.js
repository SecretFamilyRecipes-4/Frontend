import React from "react";
// import Navigation from './components/Navigation';
import SignUp from './components/SignUpForm';
import LogIn from './components/LogIn';
// import Footer from './components/Footer';
import { Route, Switch } from "react-router-dom";

// import "./css/main.css";
import "./App.css";

function App (){
  return (
    <div className='App'>
      <h1>Secret Family Recipie</h1>
      <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <LogIn />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
