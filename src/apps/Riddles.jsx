import { useState } from "react";
import { riddlesList } from "./data";
import Header from "../components/ui/custom/Header";
import { Button, Text, VStack, Input, HStack } from "@chakra-ui/react";

export default function Riddles() {
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // correct, incorrect, checking

  const showFeedback = status === "correct" || status === "incorrect";

  const handleSubmit = () => {
    setStatus("checking");
    const correctAnswer = riddlesList[current].answer.toLowerCase().trim();
    const input = userAnswer.toLowerCase().trim();

    setLoading(true);
    setTimeout(() => {
      input === correctAnswer ? setStatus("correct") : setStatus("incorrect");
      setLoading(false);
    }, 1500);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % riddlesList.length);
    setUserAnswer("");
    setStatus("idle");
  };

  return (
    <>
      <Header description="Created a simple riddles app to test declarative programming in React." />

      <VStack spacing={4} alignItems="flex-start">
        <Text textStyle="sm" fontWeight="bold">
          {riddlesList[current].title}
        </Text>
        <Text fontSize="sm" w="xs">
          {riddlesList[current].content}
        </Text>
        <Input
          placeholder="Type your answer..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          size="xs"
          w="xs"
          disabled={status === "checking"}
        />

        {showFeedback && (
          <Text
            fontSize="xs"
            color={status === "correct" ? "green.500" : "red.500"}
          >
            {status === "correct"
              ? "✅ Correct!"
              : "❌ Wrong answer. Try again!"}
          </Text>
        )}

        {/* TODO: Implement a show answer button that appears after 3 failed attempts. */}
        {/* {showAnswer && (
          <Text color="purple.600" fontStyle="italic">
            Answer: {riddlesList[current].answer}
          </Text>
        )} */}

        <HStack gap="2">
          <Button
            colorPalette="blue"
            size="2xs"
            onClick={handleSubmit}
            loading={loading}
            loadingText="Checking"
          >
            Check
          </Button>
          <Button variant="outline" size="2xs" onClick={handleNext}>
            Next Riddle
          </Button>
        </HStack>
      </VStack>
    </>
  );
}
