import "./index.css";

function TodoItem({ todo, onDeleteTodo }) {
  const deleteHandler = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <div className="TodoItem">
      <div className="TodoItem_text">
        <h3>{todo.text}</h3>
        <h5>{todo.date}</h5>
      </div>
      <button onClick={deleteHandler}>X</button>
    </div>
  );
}

export default TodoItem;
