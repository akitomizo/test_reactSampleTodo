import React from "react";

const style = {
  backgroundColor: "#DDFFFF",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InCompleteTodo = (props) => {
  const { incompleteTodos, onClickComp, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">INCOMPLETE LIST</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComp(index)}>COMPLETE!</button>
              <button onClick={() => onClickDelete(index)}>DELETE!</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
