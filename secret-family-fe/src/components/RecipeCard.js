import React from "react";

const RecipeCard = (props) => {
  return (
    <div key='tag100' className='recipe-card'>
      <h3>{props.recipe.title}</h3>
      <p>Source: {props.recipe.source}</p>
      <div className='recipe-card-tags'>
        {/* <span>Tags:</span> */}
        {props.recipe.tags.map((tag, id) => (
          <p key={id} className='tag'>
            {tag}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
