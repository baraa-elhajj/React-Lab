import { useState } from "react";
import { Button, Field, HStack, Input } from "@chakra-ui/react";
import { useTodoDispatch } from "../../../context/TodoContext.jsx";

// Global variable
let nextId = 0;

export default function AddTodoForm() {
  const [text, setText] = useState("");
  const dispatch = useTodoDispatch();

  return (
    <>
      <Field.Root w="2xs">
        <Input
          placeholder="Write something..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <HStack>
          <Button
            size="2xs"
            colorPalette="blue"
            onClick={() => {
              if (text.trim() === "") {
                alert("Write something first!");
                return;
              }

              setText("");
              dispatch({
                type: "added",
                id: nextId++,
                text: text,
              });
            }}
          >
            Add
          </Button>
          <Button
            size="2xs"
            colorPalette="red"
            onClick={() => dispatch({ type: "cleared" })}
          >
            Clear
          </Button>
        </HStack>
      </Field.Root>
    </>
  );
}
