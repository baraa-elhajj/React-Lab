import { useState } from "react";

let nextId = 0;

export default function List() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <h1>TODO List:</h1>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button
        onClick={() => {
          setTodoList([...todoList, { id: nextId++, data: todo }]);
          document.getElementById("todoInput").textContent = "";
        }}
      >
        Add
      </button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.data}</li>
        ))}
      </ul>
    </>
  );
}
