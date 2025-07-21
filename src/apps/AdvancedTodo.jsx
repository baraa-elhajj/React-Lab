import { useState } from "react";
import Header from "../components/ui/custom/Header";
import { Text, CheckboxCard, VStack } from "@chakra-ui/react";
import AddTodoForm from "../components/ui/custom/Todo/AddTodoForm";

export default function AdvancedTodo() {
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
      <AddTodoForm />

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
