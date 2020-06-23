import React from "react";

const ShowRecipeItem = ({ listNum, item }) => {
  return (
    <div>
      <span>{listNum}</span>
      <span>{item}</span>
    </div>
  );
};
export default ShowRecipeItem;
