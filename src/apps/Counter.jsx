import { useState } from "react";
import Header from "../components/ui/custom/Header";
import { Button, HStack, Text } from "@chakra-ui/react";
import { CircleCheck, CircleX } from "lucide-react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header
        description="Rendering a simple counter to show how batching works in React. 
      In fact, React processes state updates after event handlers have finished running.
      To update some state multiple times in one event, we can use  updater functions 
      such as 'setCounter(n => n + 1)'"
      />
      <Text fontWeight="bold">Counter: {counter}</Text>
      <HStack gap="1">
        <Button
          size="2xs"
          colorPalette="blue"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </Button>
        {/* Does not work correctly! */}
        <Button
          title="This is actually using setCounter(counter + 1) 3 times!"
          size="2xs"
          colorPalette="red"
          onClick={() => {
            setCounter(counter + 1);
            setCounter(counter + 1);
            setCounter(counter + 1);
          }}
        >
          +3
          <CircleX size="16" />
        </Button>
        {/* Works fine! */}
        <Button
          title="This button uses an updater function, thus React applies batching."
          size="2xs"
          colorPalette="green"
          onClick={() => {
            setCounter((c) => c + 1);
            setCounter((c) => c + 1);
            setCounter((c) => c + 1);
          }}
        >
          +3
          <CircleCheck size="16" />
        </Button>
        <Button size="2xs" colorPalette="blue" onClick={() => setCounter(0)}>
          Reset
        </Button>
      </HStack>
    </>
  );
}
