import { Button, HStack } from "@chakra-ui/react";
import Header from "../components/ui/custom/Header";

function CustomButton({ onClick, children }) {
  return (
    <Button onClick={onClick} size="xs" variant="surface">
      {children}
    </Button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <CustomButton onClick={handlePlayClick}>Play "{movieName}"</CustomButton>
  );
}

function PauseButton() {
  return (
    <CustomButton onClick={() => alert("Movie Paused")}>Pause</CustomButton>
    // If the parent component has its unique event handler, use e.stopPropagation() to stop it.
  );
}

export default function Toolbar() {
  return (
    <div>
      <Header
        description="A simple toolbar app. Tested passing event handlers as props."
        badgesIds={[1]}
      />

      <HStack wrap="wrap" gap="5">
        <PlayButton movieName="Movie 1" />
        <PauseButton />
      </HStack>
    </div>
  );
}
