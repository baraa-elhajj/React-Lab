import { useState } from "react";
import { useTodo, useTodoDispatch } from "../../../context/TodoContext.jsx";
import {
  Button,
  CheckboxCard,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTodoDispatch();

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <Input
          w="2xs"
          value={todo.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              todo: {
                ...todo,
                text: e.target.value,
              },
            });
          }}
        />
        <Button
          size="2xs"
          colorPalette="blue"
          onClick={() => setIsEditing(false)}
        >
          Save
        </Button>
      </>
    );
  } else {
    todoContent = (
      <>
        <CheckboxCard.Root
          key={todo.id}
          variant="subtle"
          colorPalette="teal"
          w="2xs"
          checked={todo.done}
          onChange={(e) => {
            dispatch({
              type: "changed",
              todo: {
                ...todo,
                done: e.target.checked,
              },
            });
          }}
        >
          <CheckboxCard.HiddenInput />
          <CheckboxCard.Control>
            <CheckboxCard.Label>
              <Text textStyle="sm">{todo.text}</Text>
            </CheckboxCard.Label>
            <CheckboxCard.Indicator />
          </CheckboxCard.Control>
        </CheckboxCard.Root>
        <Button
          size="2xs"
          colorPalette="blue"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      </>
    );
  }
  return (
    <HStack wrap="wrap" gap="2">
      {todoContent}
      <Button
        size="2xs"
        colorPalette="red"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: todo.id,
          });
        }}
      >
        Delete
      </Button>
    </HStack>
  );
}

export default function TodoList() {
  const todos = useTodo();

  return (
    <VStack wrap="wrap" gap="2" alignItems="flex-start">
      {todos.length === 0 ? (
        <Text textStyle="xs" fontStyle="italic">
          Nothing to do yet, add something...
        </Text>
      ) : (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      )}
    </VStack>
  );
}
