import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return React.createElement("div", { style: { padding: "20px" } },
    React.createElement("h2", null, "Todo List"),
    React.createElement(AddTodoForm, { addTodo }),
    React.createElement(
      "ul",
      null,
      todos.map((todo) =>
        React.createElement(
          "li",
          {
            key: todo.id,
            onClick: () => toggleTodo(todo.id),
            style: { textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" },
            "data-testid": `todo-${todo.id}`
          },
          todo.text,
          React.createElement(
            "button",
            { onClick: (e) => { e.stopPropagation(); deleteTodo(todo.id); }, "data-testid": `delete-${todo.id}`, style: { marginLeft: "10px" } },
            "Delete"
          )
        )
      )
    )
  );
};

export default TodoList;
