import Header from "../components/ui/custom/Header";
import { Text, CheckboxCard, VStack, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function AdvancedTodo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleOnClick() {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current.pause();
    } else {
      setIsPlaying(true);
      videoRef.current.play();
    }
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
    </>
  );
}
