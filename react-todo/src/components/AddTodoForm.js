import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText("");
  };

  return React.createElement("form", { onSubmit: handleSubmit },
    React.createElement("input", {
      type: "text",
      value: text,
      onChange: (e) => setText(e.target.value),
      "data-testid": "new-todo-input",
      placeholder: "Add new todo"
    }),
    React.createElement("button", { type: "submit", "data-testid": "add-todo-btn" }, "Add")
  );
};

export default AddTodoForm;
