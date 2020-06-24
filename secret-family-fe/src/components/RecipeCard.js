import React from "react";

const RecipeCard = (props) => {
  return (
    <div key='rectag' className='recipe-card'>
      <h3>{props.recipe.title}</h3>
      <p>Source: {props.recipe.source}</p>
      <div key='tagrc' className='recipe-card-tags'>
        {/* <span>Tags:</span> */}
        {props.recipe.tags.map((tag) => (
          <p key={props.recipe.id} className='tag'>
            {tag}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
