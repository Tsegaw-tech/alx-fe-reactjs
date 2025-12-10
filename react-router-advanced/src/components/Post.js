import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return React.createElement("div", null,
    React.createElement("h2", null, "Post ID: " + id)
  );
};

export default Post;
