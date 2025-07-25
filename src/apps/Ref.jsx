import Header from "../components/ui/custom/Header";
import { Text, Button, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function AdvancedTodo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const inputRef = useRef(null);

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

  return (
    <>
      <Header
        description="A page that shows some React Refs tests and examples.
        Usually, refs are used for non-destructive actions like focusing, 
        scrolling, or measuring and holding DOM elements."
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
    </>
  );
}
