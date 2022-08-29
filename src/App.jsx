import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      text: "Fare la spesa",
      date: "2022-09-01",
    },
    {
      id: 2,
      text: "Allenarsi",
      date: "2022-09-05",
    },
  ]);

  return (
    <div className="App">
      <section className="App_form">
        <AddTodo list={list} setList={setList} />
      </section>
      <section className="App_todos">
        <TodoList list={list} />
      </section>
    </div>
  );
}

export default App;
