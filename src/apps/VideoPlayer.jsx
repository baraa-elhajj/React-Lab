import Header from "../components/ui/custom/Header";
import { Text, Button, Input } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  const videoRef = useRef(null);

  // Play with effect dependency array and check results in the console.
  useEffect(() => {
    console.log("Effect triggered!");
    if (isPlaying) {
      videoRef.current.play();
      console.log("Calling video.play() method.");
    } else {
      videoRef.current.pause();
      console.log("Calling video.pause() method.");
    }

    return () => {
      console.log("Cleanup!");
    };
  }, [isPlaying]); // try the following values: [], [isPlaying] or keep it empty.

  return (
    <>
      <Header
        description="Created a simple video player to test useEffect() hook. 
        The block inside the useEffect() hook runs after every render unless 
        given a dependency array (i.e Effect Dependency) that specifies when 
        to run. In fact, an empty dependency array [ ] tells React to run the 
        code only on mount (when the component appears). If provided with a 
        state or something, the code runs when it changes. Used cleanup 
        function as well, which runs before any new effect and on unmount."
      />

      <Text textStyle="sm" fontWeight="bold" mb="2">
        Video Player
      </Text>
      <video width="250" ref={videoRef} loop playsInline>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something to trigger a render..."
        size="xs"
        w="2xs"
        mt="2"
      />
      <br />
      <Button
        size="2xs"
        colorPalette="orange"
        onClick={() => setIsPlaying(!isPlaying)}
        mt="2"
      >
        {isPlaying ? "Pause" : "Play"}
      </Button>
    </>
  );
}
