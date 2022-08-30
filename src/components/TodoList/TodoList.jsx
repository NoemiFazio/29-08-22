import "./index.css";
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";

function TodoList({ list, onDeleteTodo }) {
  return (
    <div className="TodoList">
      {list.length ? (
        list.map((todo) => (
          <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} key={todo.id} />
        ))
      ) : (
        <p>...loading</p>
      )}
    </div>
  );
}

export default TodoList;
