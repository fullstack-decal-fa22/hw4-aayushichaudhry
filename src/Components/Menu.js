import React, { useState } from "react";
import Color from "./Color";
import Feed from "./Feed";
/* Add any imports you think you might need here! */

const Menu = (props) => {

  return (
    <div className="colorOptions">
      <Color
        color="red"
        handleClick={(color) => props.handleClick(color)}
      ></Color>
      <Color
        color="pink"
        handleClick={(color) => props.handleClick(color)}
      ></Color>
      <Color
        color="blue"
        handleClick={(color) => props.handleClick(color)}
      ></Color>
      <Color
        color="green"
        handleClick={(color) => props.handleClick(color)}
      ></Color>
    </div>
  );
};

export default Menu;
