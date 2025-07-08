import { useState } from "react";
import Header from "../components/ui/custom/Header";
import { Button, Field, HStack, Input, Text, List } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";

// Global variable
let nextId = 0;

export default function TodoList() {
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
      <Text textStyle="sm" fontWeight="bold">
        TODO:
      </Text>
      <HStack gap="2" alignItems="flex-end">
        <Field.Root required w="2xs">
          <Input
            placeholder="Write something..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </Field.Root>
        <Button
          size="xs"
          colorPalette="blue"
          onClick={() => {
            setTodoList([...todoList, { id: nextId++, data: todo }]);
          }}
        >
          Add
        </Button>
        <Button size="xs" colorPalette="red" onClick={() => setTodo("")}>
          Clear
        </Button>
      </HStack>
      <br />

      <List.Root gap="2" variant="plain" align="center">
        {todoList.map((todo, index) => (
          <List.Item key={index}>
            <List.Indicator asChild color="green.500">
              <LuCircleCheck />
            </List.Indicator>
            {todo.data}
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}
