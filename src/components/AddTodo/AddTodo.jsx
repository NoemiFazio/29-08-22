import "./index.css";
import { useState } from "react";

function AddTodo({ list, setList }) {
  const [todoInput, setTodoInput] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    setList([
      ...list,
      { id: list.length + 1, text: todoInput, date: todoDate },
    ]);
    setTodoInput("");
    setTodoDate("");
  };

  return (
    <form className="AddTodo" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Inserisci una todo"
        required
      />
      <input
        type="date"
        value={todoDate}
        onChange={(e) => setTodoDate(e.target.value)}
      />
      <button>Aggiungi</button>
    </form>
  );
}

export default AddTodo;
