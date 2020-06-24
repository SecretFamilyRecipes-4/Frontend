import React from "react";

const ShowArrayItem = ({ listNum, item }) => {
  return (
    <div className='direction-div'>
      <span>{listNum}</span>
      <span>{item}</span>
    </div>
  );
};
export default ShowArrayItem;
