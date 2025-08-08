import Header from "../components/ui/custom/Header";
import { Text, Button, Input, Image, HStack, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { foods } from "./data.jsx";
import { flushSync } from "react-dom";

export default function Ref() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const inputRef = useRef(null);

  const [foodListIndex, setFoodListIndex] = useState(0);
  const selectedRef = useRef(null);

  function handleOnClick() {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current.pause();
    } else {
      setIsPlaying(true);
      videoRef.current.play();
    }
  }

  function handleFocusOnClick() {
    inputRef.current.focus();
  }

  function handleNextOnClick() {
    flushSync(() => {
      if (foodListIndex < foods.length - 1) {
        setFoodListIndex(foodListIndex + 1);
      } else {
        setFoodListIndex(0);
      }

      selectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    });
  }

  return (
    <>
      <Header
        description="A page that shows some React Refs tests and examples.
        Usually, refs are used for non-destructive actions like focusing, 
        scrolling, or measuring and holding DOM elements."
        badgesIds={[5, 8]}
      />

      <Text textStyle="sm" fontWeight="bold">
        Video Player
      </Text>
      <Text textStyle="2xs" fontStyle="italic" my="2" color="gray">
        Used video element ref + play() and pause() video functions to play and
        pause the video.
      </Text>
      <video
        width="250"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <Button size="2xs" colorPalette="orange" onClick={handleOnClick} mt="2">
        {isPlaying ? "Pause" : "Play"}
      </Button>

      <Text textStyle="sm" fontWeight="bold" mt="5">
        Focus Input
      </Text>
      <Text textStyle="2xs" fontStyle="italic" my="2" color="gray">
        Used input element ref to focus on the input when button clicked.
      </Text>
      <Text fontSize="sm" w="xs">
        Random Form
      </Text>
      <Input ref={inputRef} placeholder="Something..." size="xs" w="2xs" />
      <br />
      <Button
        size="2xs"
        colorPalette="blue"
        onClick={handleFocusOnClick}
        mt="2"
      >
        Focus
      </Button>

      <Text textStyle="sm" fontWeight="bold" mt="5">
        Horizental Scroll View
      </Text>
      <Text textStyle="2xs" fontStyle="italic" my="2" color="gray">
        Used list selected ref to scroll into view. Applied flushSync() to force
        React to update the DOM before the scroll.
      </Text>
      <HStack as="ul" gap="5" wrap="wrap">
        {foods.map((food, i) => {
          return (
            <li key={food.id} ref={foodListIndex === i ? selectedRef : null}>
              <Image
                border={foodListIndex === i ? "2px solid gray" : "none"}
                src={`/images/${food.image}`}
                alt={food.name}
                maxW="120px"
                objectFit="cover"
              />
            </li>
          );
        })}
      </HStack>
      <Button size="2xs" colorPalette="blue" onClick={handleNextOnClick} mt="2">
        Next
      </Button>
    </>
  );
}
