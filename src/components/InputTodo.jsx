import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        placeholder="input text Todo"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
};
