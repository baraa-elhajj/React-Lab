import { useState } from "react";
import { riddlesList } from "./data";
import Header from "../components/ui/custom/Header";
import { Button, Text, VStack, Input, HStack } from "@chakra-ui/react";
import { Sparkles } from "lucide-react";

export default function Riddles() {
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [wrongAnswerCounter, setWrongAnswerCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // values: idle, correct, incorrect, checking, showAnswer

  // Declarative workflow
  const showFeedback =
    status === "correct" || status === "incorrect" || status === "showAnswer";
  const showAnswerButton = wrongAnswerCounter >= 3;

  const handleSubmit = () => {
    if (userAnswer === "") {
      alert("Try guessing the answer first!");
      return;
    }

    setStatus("checking");
    const correctAnswer = riddlesList[current].answer.toLowerCase().trim();
    const input = userAnswer.toLowerCase().trim();

    setLoading(true);
    setTimeout(() => {
      if (input === correctAnswer) {
        setStatus("correct");
      } else {
        setStatus("incorrect");
        setWrongAnswerCounter((prev) => prev + 1);
      }
      setLoading(false);
    }, 1500);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % riddlesList.length);
    setUserAnswer("");
    setWrongAnswerCounter(0);
    setStatus("idle");
  };

  const handleShowAnswer = () => {
    setStatus("showAnswer");
  };

  return (
    <>
      <Header
        description="Created a simple riddles app to test declarative 
      programming in React, by describing the UI for each visual state 
      rather than micromanaging the UI."
      />

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
            color={
              status === "correct"
                ? "green.500"
                : status === "incorrect"
                ? "red.500"
                : "purple.600"
            }
          >
            {status === "correct"
              ? "✅ Correct!"
              : status === "incorrect"
              ? "❌ Wrong answer. Try again!"
              : "The answer is: " + riddlesList[current].answer}
          </Text>
        )}

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
          {showAnswerButton && (
            <Button colorPalette="green" size="2xs" onClick={handleShowAnswer}>
              Show Answer
              <Sparkles size="16" />
            </Button>
          )}
        </HStack>
      </VStack>
    </>
  );
}
