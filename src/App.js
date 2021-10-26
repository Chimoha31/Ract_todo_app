import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todoText, setTodoText] = useState('');

  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい",
  ]);

  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  const onChangeTodoText = (event) => {
    return setTodoText(event.target.value);
  }

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
    // alert(todoText);
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    // alert(index);
  }


  return (
    <>
      <div className="input_area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}></input>
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete_area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete_area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
