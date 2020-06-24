import React from "react";
// import RecipeSideBar from "../components/RecipeSidebar";

import Navigation from "../components/Navigation";
import TagSearch from "../components/TagSearch";

const RecipesDashboard = () => {
  return (
    <div className='dashboard=wrapper'>
      <Navigation />
      <TagSearch />
      {/* <RecipeSideBar /> */}
    </div>
  );
};

export default RecipesDashboard;
