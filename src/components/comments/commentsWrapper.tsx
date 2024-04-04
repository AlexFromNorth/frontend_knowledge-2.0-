import React from "react";
import Comment from "./Comment.tsx";
import CommentsInner from "./CommentsInner.tsx";

const CommentsWrapper = () => {
  return (
    <div>
      <Comment />
      <CommentsInner />
    </div>
  );
};

export default CommentsWrapper;
