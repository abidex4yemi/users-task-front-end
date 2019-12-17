import React from "react";
import Todo from "./Todo";

/**
 * 
 * your components will all go in this `component` directory.
feel free to change this component.js into TodoList.js
 */
function TodoList(props) {
  const { todoList, toggleTodoCompleted, value } = props;
  const searchTerm = value.toLowerCase();

  return (
    <ul>
      {/* eslint-disable-next-line array-callback-return */}
      {todoList.map(todo => {
        const currentTodo = todo.task.toLowerCase();

        if (currentTodo.includes(searchTerm)) {
          return (
            <Todo
              key={todo.id}
              toggleTodoCompleted={toggleTodoCompleted}
              {...todo}
            />
          );
        }
      })}
    </ul>
  );
}

export default TodoList;
