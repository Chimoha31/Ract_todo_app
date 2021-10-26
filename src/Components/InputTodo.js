import React from "react";
import "../Components/InputTodo.css";

const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
      <div className="input_area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
          disabled={disabled}
        ></input>
        <button disabled={disabled} onClick={onClick}>追加</button>
      </div>
  );
};

export default InputTodo;
