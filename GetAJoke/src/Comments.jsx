import React, { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

function Comments() {
  const [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "great job",
      rating: 4,
    },
  ]);

  const addComment = (newComment) => {
    setComments((currComments) => [...currComments, newComment]);
    console.log("New comment added", newComment);
  };

  return (
    <>
      <h3>Reviews..</h3>
      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>{comment.rating}</span>
          &nbsp; &nbsp;
          <span>{comment.remarks}</span>
          <br />
          <span>{comment.username}</span>
        </div>
      ))}
      <CommentsForm addComment={addComment} />
    </>
  );
}

export default Comments;
