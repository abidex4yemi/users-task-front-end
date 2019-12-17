import React from "react";

function Todo(props) {
  const { task, completed, id, toggleTodoCompleted } = props;
  const addNewClass = completed ? "strikethrough" : "";
  return (
    <li
      className={`list-item ${addNewClass}`}
      completed={`${completed}`}
      onClick={() => toggleTodoCompleted(id)}
    >
      {task}
    </li>
  );
}

export default Todo;
