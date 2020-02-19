// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [input, setInput] = useState('');
  const handleInput = (event) => {
    setInput(event.target.value);
  }
  const submitComment = (event) => {
    event.preventDefault();
    setComments(comments.concat({username: 'user24601', text: event.target.querySelector('input').value}));
    setInput('');
  }
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment}/>
      ))}
      <CommentInput comment={input} 
                    changeComment={handleInput} 
                    submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;
