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

// global variable
let nextId = 0;

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Header
        description="A todo app that tests updating the state of an array 
      without mutating it using copy spread syntax. Note: Use the method 
      slice() and two spread syntax to add elements into the array; e.g. 
      ...array.slice(0, indexToAdd) >> { itemToAdd } >> ...array.slice(indexToAdd)"
        badgesIds={[5, 2]}
      />
      <Text textStyle="sm" fontWeight="bold">
        What's on your mind?
      </Text>
      <Field.Root w="2xs">
        <Input
          placeholder="Write something..."
          value={inputLabel}
          onChange={(e) => {
            setTodo(e.target.value);
            setInputLabel(e.target.value);
          }}
        />
        <HStack>
          <Button
            size="2xs"
            colorPalette="blue"
            onClick={() => {
              if (inputLabel.trim() === "") {
                alert("Write something first!");
                return;
              }

              setTodoList([...todoList, { id: nextId++, data: todo }]);
              setInputLabel("");
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
        {todoList.length == 0 ? (
          <Text textStyle="xs" fontStyle="italic">
            Nothing to do yet, add something...
          </Text>
        ) : (
          todoList.map((todo) => (
            <CheckboxCard.Root
              key={todo.id}
              variant="subtle"
              colorPalette="teal"
              w="2xs"
            >
              <CheckboxCard.HiddenInput />
              <CheckboxCard.Control>
                <CheckboxCard.Label>
                  <Text textStyle="sm">{todo.data}</Text>
                </CheckboxCard.Label>
                <CheckboxCard.Indicator />
              </CheckboxCard.Control>
            </CheckboxCard.Root>
          ))
        )}
      </VStack>
    </>
  );
}
