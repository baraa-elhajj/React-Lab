import { useState } from "react";
import Header from "../components/ui/custom/Header";
import { Text } from "@chakra-ui/react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 230,
    y: 165,
  });
  return (
    <>
      <Header
        description="Rendering a pointer that moves along with the user cursor. 
    This app tests using and modifying a JS object in a state."
      />
      <Text textStyle="xs" color="gray.500">
        x: {(position.x - 230).toFixed(2)}, y: {(position.y - 165).toFixed(2)}
      </Text>
      <div
        onPointerMove={(e) => {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
        style={{
          position: "relative",
          width: "50vw",
          height: "50vh",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "blue",
            borderRadius: "50%",
            transform: `translate(${position.x - 230}px, ${
              position.y - 165
            }px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
}
