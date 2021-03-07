import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickRedo } = props;
  return (
    <div className="complete-area">
      <p className="title">COMPLETE LIST</p>
      <div className="list-row">
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickRedo(index)}>REDO</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
