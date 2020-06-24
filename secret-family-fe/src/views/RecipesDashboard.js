import React from "react";
// import RecipeSideBar from "../components/RecipeSidebar";

import Navigation from "../components/Navigation";
import TagSearch from "../components/TagSearch";
// import Dashboard from "../components/Dashboard";
const RecipesDashboard = () => {
  return (
    <div className='dashboard=wrapper'>
      <Navigation />
      <TagSearch />
      {/* <Dashboard /> */}
      {/* <RecipeSideBar /> */}
    </div>
  );
};

export default RecipesDashboard;
