import React from "react";

const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <>
      <div className="input_area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        ></input>
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
};

export default InputTodo;
