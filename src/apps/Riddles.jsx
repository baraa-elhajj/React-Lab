import { useState } from "react";
import { riddlesList } from "./data";
import Header from "../components/ui/custom/Header";
import { Button, Text, VStack, Input, HStack } from "@chakra-ui/react";

// export default function Riddles() {
//   const [answer, setAnswer] = useState("");
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState("typing");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus("submitting");
//     setLoading(true);
//     try {
//       await checkAnswer(answer);
//       setStatus("success");
//       setMessage("Correct");
//     } catch (err) {
//       setStatus("typing");
//       setError(err);
//     }
//     setLoading(false);
//   }

//   function handleTextareaChange(e) {
//     setAnswer(e.target.value);
//   }

//   return (
//     <>
//       <Header description="Created a simple riddles app to test declarative programming in React." />

//       <form onSubmit={handleSubmit}>
//         <VStack wrap="wrap" gap="3" alignItems="flex-start">
//           <Text textStyle="sm" fontWeight="bold">
//             {riddlesList[0].title}
//           </Text>
//           <Text textStyle="xs">{riddlesList[0].content}</Text>
//           <Textarea
//             placeholder="Your answer"
//             value={answer}
//             onChange={handleTextareaChange}
//             size="xs"
//             maxW="xs"
//             resize="none"
//             disabled={status === "submitting"}
//           ></Textarea>
//           {message}
//           <Button
//             type="submit"
//             size="2xs"
//             colorPalette="blue"
//             color="white"
//             loading={loading}
//             loadingText="Checking"
//             // disabled={answer.length === 0 || status === "submitting"}
//           >
//             Check
//           </Button>
//         </VStack>
//       </form>
//     </>
//   );
// }

// function checkAnswer(answer) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let shouldError = answer.toLowerCase() !== riddlesList[0].answer;
//       if (shouldError) {
//         reject(new Error("Oops, wrong answer. Try again!"));
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// }

export default function RiddleForm() {
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("gray.600");
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const correctAnswer = riddlesList[current].answer.toLowerCase().trim();
    const input = userAnswer.toLowerCase().trim();

    setLoading(true);
    setTimeout(() => {
      if (input === correctAnswer) {
        setFeedback("✅ Correct!");
        setFeedbackColor("green.500");
        setShowAnswer(false);
      } else {
        setFeedback("❌ Wrong answer. Try again!");
        setFeedbackColor("red.500");
        setShowAnswer(true);
      }
      setLoading(false);
    }, 1500);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % riddlesList.length);
    setUserAnswer("");
    setFeedback("");
    setShowAnswer(false);
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
        />

        {feedback && (
          <Text fontWeight="medium" color={feedbackColor}>
            {feedback}
          </Text>
        )}

        {showAnswer && (
          <Text color="purple.600" fontStyle="italic">
            Answer: {riddlesList[current].answer}
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
        </HStack>
      </VStack>
    </>
  );
}
