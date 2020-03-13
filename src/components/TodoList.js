// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <>
      <h1>Todo List : MVP</h1>
      <div>
      {props.listItems.map(task => (
        <Todo
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
        />
        ))}
      </div>
    </>
  );
};

export default TodoList;
