//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import dummydata from '../../dummy-data';
import "./Posts.css";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummydata);
  return (
    <div className="posts-container-wrapper">
      {data.map((props, index) => {
        return <Post key={index} post={props} />
      })};
    </div>
  );
};

export default PostsPage;

