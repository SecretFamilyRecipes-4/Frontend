
import React, { useState } from "react";
import Navigation from './components/Navigation';
import SignUp from './components/SignUpForm';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import SignUpPage from "./views/SignUpPage";
import AddRecipe from "./views/AddRecipe";
import RecipesDashboard from "./views/RecipesDashboard";
import SingleRecipe from "./views/SingleRecipe";
import UpdateRecipe from "./views/UpdateRecipe";

function App() {
  const [app, setApp] = useState("");

  return (
    <div className='App'>
    <h1 className='header'>Secret Family Recipie</h1>
    <Switch>
        <PrivateRoute exact path='/' component={RecipesDashboard} />
        <Route path='/log-in' component={LogIn} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login'>
          <LogIn />
        </Route>
        <PrivateRoute path='/recipes/view/:id' component={SingleRecipe} />
        <PrivateRoute path='/recipes/edit/:id' component={UpdateRecipe} />
        <PrivateRoute path='/add-recipe' component={AddRecipe} />
      </Switch> 

    </div>
  );


export default App;
