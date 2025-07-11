import { useState } from "react";
import Header from "../components/ui/custom/Header";
import {
  Button,
  Field,
  HStack,
  Input,
  Text,
  CheckboxCard,
  VStack,
} from "@chakra-ui/react";

export default function TodoList() {
  const [nextTodoId, setNextTodoId] = useState(0);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Header
        description="A todo app that tests updating the state of an array 
      without mutating it using copy spread syntax. Note: Use the method 
      slice() and two spread syntax to add elements into the array; e.g. 
      ...array.slice(0, indexToAdd) >> { itemToAdd } >> ...array.slice(indexToAdd)"
      />
      <Text textStyle="sm" fontWeight="bold">
        What's on your mind?
      </Text>
      <Field.Root w="2xs">
        <Input
          placeholder="Write something..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <HStack>
          <Button
            size="2xs"
            colorPalette="blue"
            onClick={() => {
              if (todo) {
                setTodoList([...todoList, { id: nextTodoId, data: todo }]);
                setNextTodoId((id) => id + 1);
              } else {
                alert("Write something first!");
              }
            }}
          >
            Add
          </Button>
          <Button size="2xs" colorPalette="red" onClick={() => setTodoList([])}>
            Clear
          </Button>
        </HStack>
      </Field.Root>

      <br />

      <VStack wrap="wrap" gap="2" alignItems="flex-start">
        <Text textStyle="sm" fontWeight="bold">
          TODO List:
        </Text>
        {todoList.map((todo) => (
          //   TODO: Check why nextId is giving a duplicated key error.
          <CheckboxCard.Root
            key={todo.id}
            variant="subtle"
            colorPalette="teal"
            w="2xs"
          >
            <CheckboxCard.HiddenInput />
            <CheckboxCard.Control>
              <CheckboxCard.Label>
                <Text textStyle="sm">
                  {todo.data} - {todo.id}
                </Text>
              </CheckboxCard.Label>
              <CheckboxCard.Indicator />
            </CheckboxCard.Control>
          </CheckboxCard.Root>
        ))}
      </VStack>
    </>
  );
}
