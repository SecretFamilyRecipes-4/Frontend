import React from "react";
import SignUp from './components/SignUpForm';
import LogIn from './components/LogIn';
import { Route, Switch } from "react-router-dom";
import DataFetching from './components/DataFetching';


// import "./css/main.css";
import "./App.css";

function App (){
  return (
    <div className='App'>
      {/* <h1>Secret Family Recipie</h1> */}
      <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <LogIn />
          </Route>
      </Switch>
      <DataFetching />
    </div>
  );
}

export default App;
