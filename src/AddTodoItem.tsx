import React, { useState } from "react";

interface Props {
  addTodo: addTodo;
}

export const AddTodoItem: React.FC<Props> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    addTodo({ text: newTodo, complete: false });
    setNewTodo("");
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    setNewTodo(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button>Add Item</button>
    </form>
  );
};
