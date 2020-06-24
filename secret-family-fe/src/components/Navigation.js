import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navigation = ({ history }) => {
  const signOut = () => {
    localStorage.removeItem("token");
    history.push("/log-in");
  };

  return (
    <nav className='nav'>
      <div className='nav-logo-set'>
        <p className='nav-title'>Secret Family Recipes Cookbook</p>
      </div>
      <div className='links'>
        <button className='add-recipe-btn'>
          <NavLink to='/add-recipe'>Add New Recipe</NavLink>
        </button>

        <button className='sign-out-btn' onClick={signOut}>
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default withRouter(Navigation);
