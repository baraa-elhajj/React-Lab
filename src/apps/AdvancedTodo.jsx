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

export default function AdvancedTodo() {
  const [todo, setTodo] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Header
        description="An advanced version of Todo app using a reducer/context
        combination. Worked with useReducer(), useContext(), and custom hooks 
        to scale up the app, and avoid props drilling. Also moved all the wiring
        into one context provider file."
      />

      {/* TODO: change the app logic to use a reducer/context combination. */}
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
