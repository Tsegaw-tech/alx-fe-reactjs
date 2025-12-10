import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts from API
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 60000, // 1 minute cache
  });

  if (isLoading) {
    return React.createElement("p", null, "Loading posts...");
  }

  if (isError) {
    return React.createElement("p", null, "Error: " + error.message);
  }

  return React.createElement(
    "div",
    { style: { padding: "20px" } },
    React.createElement("h2", null, "Posts"),
    React.createElement(
      "button",
      { onClick: refetch, style: { marginBottom: "10px" } },
      "Refetch Posts"
    ),
    React.createElement(
      "ul",
      null,
      data.map((post) =>
        React.createElement(
          "li",
          { key: post.id },
          React.createElement("strong", null, post.title),
          React.createElement("p", null, post.body)
        )
      )
    )
  );
};

export default PostsComponent;
