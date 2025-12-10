import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return React.createElement("div", null,
    React.createElement(TodoList)
  );
};

export default App;
