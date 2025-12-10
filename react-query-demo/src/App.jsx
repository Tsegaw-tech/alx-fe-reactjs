import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

// Create a React Query client
const queryClient = new QueryClient();

const App = () => {
  return React.createElement(
    QueryClientProvider,
    { client: queryClient },
    React.createElement(PostsComponent, null)
  );
};

export default App;
