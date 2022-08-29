import "./index.css";

function TodoItem({ todo }) {
  return (
    <div className="TodoItem">
      <h3>{todo.text}</h3>
      <h5>{todo.date}</h5>
    </div>
  );
}

export default TodoItem;
