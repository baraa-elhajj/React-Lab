import { useState } from "react";
import Header from "../components/ui/custom/Header";
import { Button, Field, HStack, Input, Text } from "@chakra-ui/react";

let nextId = 0;

export default function List() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Header
        description="A todo app that tests updating the state of an array 
      without mutating it using copy spread syntax."
      ></Header>
      {/* TODO: enhance design with Chakra UI*/}
      {/* ... */}
      <Text fontSize="sm">TODO:</Text>
      <HStack gap="2" alignItems="flex-end">
        <Field.Root required w="xs">
          <Input placeholder="Write something..." />
        </Field.Root>
        <Button size="xs" colorPalette="blue">
          Add
        </Button>
      </HStack>
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
