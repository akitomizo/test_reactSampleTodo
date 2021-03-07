import { React } from "react";
import react, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComp = (index) => {
    const newInompTodos = [...incompleteTodos];
    newInompTodos.splice(index, 1);
    setIncompleteTodos(newInompTodos);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  const onClickRedo = (index) => {
    const newcompTodos = [...completeTodos];
    newcompTodos.splice(index, 1);
    setCompleteTodos(newcompTodos);
    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <div className="incomplete-area">
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
    </>
  );
};

export const App2 = () => {
  return (
    <div className="App">
      <h1>RTEST2</h1>
    </div>
  );
};
