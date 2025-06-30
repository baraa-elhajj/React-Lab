import { useState } from "react";
import Header from "../components/ui/custom/Header";
import {
  VStack,
  HStack,
  Textarea,
  RadioGroup,
  Button,
  Text,
} from "@chakra-ui/react";

export default function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");
  const [resize, setResize] = useState("horizontal");
  const radioItems = [
    { label: "Horizental", value: "horizontal" },
    { label: "Vertical", value: "vertical" },
    { label: "None", value: "none" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`Sent "${message}" to ${to}`);
    }, 5000);
  }

  return (
    <>
      <Header
        description="Rendering a simple form app, which displays the a message using an alert 
      priorly selected by the user. This app shows that when useState() is called, React gives 
      a 'snapshot' of the state for that render. Event handlers created in the past have the state 
      values from the render in which they were created."
      />

      <form onSubmit={handleSubmit}>
        <VStack wrap="wrap" gap="3" alignItems="flex-start">
          <label>
            <Text as="span" textStyle="sm">
              Send To:{" "}
            </Text>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
            </select>
          </label>
          <RadioGroup.Root
            defaultValue={resize}
            onChange={(e) => setResize(e.target.value)}
            size="sm"
            maxW="sm"
            colorPalette="blue"
          >
            <HStack gap="5">
              {radioItems.map((item) => (
                <RadioGroup.Item key={item.value} value={item.value}>
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                </RadioGroup.Item>
              ))}
            </HStack>
          </RadioGroup.Root>
          <Textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            size="sm"
            maxW="xs"
            resize={resize}
          ></Textarea>
          <Button type="submit" size="2xs" colorPalette="blue" color="white">
            Send
          </Button>
        </VStack>
      </form>
    </>
  );
}
