import React from "react";
import { quotes } from "./data";
import { Text, Button } from "@chakra-ui/react";
import Header from "../components/ui/custom/Header";

function Quotes({ children }) {
  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <Text textStyle="lg" fontWeight="bold">
        Quote of the day:
      </Text>
      <Text textStyle="sm" fontStyle={"italic"}>
        {quote}
      </Text>

      <br />

      <Button onClick={next} size="xs" variant="surface">
        Change Quote
      </Button>

      <br />
      <br />

      <Text textStyle="xs" fontStyle={"italic"}>
        {children}
      </Text>
    </>
  );
}

function Copyrights({ year }) {
  return "©" + year + " React Lab. All Rights Reserved.";
}

export default function QuotesGenerator() {
  return (
    <>
      <Header
        description="Rendering a random quotes app, using React useState() Hook."
        badgesIds={[1, 2]}
      />
      <Quotes>
        <Copyrights year={2025} />
      </Quotes>
    </>
  );
}
