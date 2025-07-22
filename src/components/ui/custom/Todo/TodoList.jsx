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
import { Check, Pencil, X } from "lucide-react";

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
          <Check />
        </Button>
      </>
    );
  } else {
    todoContent = (
      <>
        <CheckboxCard.Root
          key={todo.id}
          variant="outline"
          colorPalette="blue"
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
          <Pencil />
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
        <X />
      </Button>
    </HStack>
  );
}

export default function TodoList() {
  const todos = useTodo();

  return (
    <VStack wrap="wrap" gap="2" alignItems="flex-start">
      <Text textStyle="sm" fontWeight="bold">
        TODO List:
      </Text>
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
