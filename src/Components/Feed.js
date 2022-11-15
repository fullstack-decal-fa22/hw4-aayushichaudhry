import { useState } from "react";
import React from "react";
import Menu from "./Menu";
import Block from "./Block";

const Feed = () => {
  /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
  // Refer to Hint 2 for more help!

  /* Use the map() function to render multiple Blocks! */
  const [numPosts, addPost] = useState([]);

  const update = (boxColor) => {
    addPost(numPosts => [boxColor, ...numPosts]);
  };
  const posts = numPosts.map((color) => <Block color={color}/>); // TODO: edit this variable

  return (
    <div>
      <Menu handleClick={update}></Menu>
      {posts}
    </div>
  );
};

export default Feed;
